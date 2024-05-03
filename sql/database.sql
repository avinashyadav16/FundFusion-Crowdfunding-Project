DROP TABLE IF EXISTS `Rate`;
DROP TABLE IF EXISTS `Follow`;
DROP TABLE IF EXISTS `Comment`;
DROP TABLE IF EXISTS `Like`;
DROP TABLE IF EXISTS `Pledge`;
DROP TABLE IF EXISTS `Sample`;
DROP TABLE IF EXISTS `Project`;
DROP TABLE IF EXISTS `User`;

CREATE TABLE `User`(
    `uname` VARCHAR(60) NOT NULL,
    `upwd` BINARY(60) NULL,
    `name` VARCHAR(60) NULL,
    `ccn` VARCHAR(60) NULL,
    `email` VARCHAR(60) NULL,
    `addr` VARCHAR(60) NULL,
    `interest` VARCHAR(60) NULL,
    PRIMARY KEY(`uname`)
);

CREATE TABLE `Project`(
    `pid` INT NOT NULL,
    `pname` VARCHAR(60) NULL,
    `uname` VARCHAR(60) NULL,
    `description` VARCHAR(1000) NULL,
    `profpic` VARCHAR(60) NULL,
    `tag` VARCHAR(60) NULL,
    `minamount` INT NULL,
    `maxamount` INT NULL,
    `curamount` INT NULL,
    `posttime` DATETIME NULL,
    `status` VARCHAR(60) NULL,
    `endtime` DATETIME NULL,
    `actualendtime` DATETIME NULL,
    `plannedcompletiontime` DATETIME NULL,
    `actualcompletiontime` DATETIME NULL,
    `progress` INT NULL,
    PRIMARY KEY(`pid`),
    FOREIGN KEY(`uname`) REFERENCES `User`(`uname`)
);

CREATE TABLE `Sample`(
    `pid` INT NOT NULL,
    `filename` VARCHAR(60) NOT NULL,
    `uploadtime` DATETIME NULL,
    PRIMARY KEY(`filename`),
    FOREIGN KEY(`pid`) REFERENCES `Project`(`pid`)
);

CREATE TABLE `Pledge`(
    `uname` VARCHAR(60) NOT NULL,
    `pid` INT NOT NULL,
    `amount` INT NULL,
    `time` DATETIME NOT NULL,
    `charged` BOOLEAN NOT NULL,
    PRIMARY KEY(`pid`, `uname`, `time`),
    FOREIGN KEY(`pid`) REFERENCES `Project`(`pid`),
    FOREIGN KEY(`uname`) REFERENCES `User`(`uname`)
);

CREATE TABLE `Like`(
    `uname` VARCHAR(60) NOT NULL,
    `pid` INT NOT NULL,
    `time` DATETIME NOT NULL,
    PRIMARY KEY(`pid`, `uname`),
    FOREIGN KEY(`pid`) REFERENCES `Project`(`pid`),
    FOREIGN KEY(`uname`) REFERENCES `User`(`uname`)
);

CREATE TABLE `Comment`(
    `uname` VARCHAR(60) NOT NULL,
    `pid` INT NOT NULL,
    `content` VARCHAR(60) NULL,
    `time` DATETIME NOT NULL,
    PRIMARY KEY(`pid`, `uname`, `time`),
    FOREIGN KEY(`pid`) REFERENCES `Project`(`pid`),
    FOREIGN KEY(`uname`) REFERENCES `User`(`uname`)
);

CREATE TABLE `Rate`(
    `uname` VARCHAR(60) NOT NULL,
    `pid` INT NOT NULL,
    `score` FLOAT NULL,
    `time` DATETIME NOT NULL,
    PRIMARY KEY(`pid`, `uname`),
    FOREIGN KEY(`pid`) REFERENCES `Project`(`pid`),
    FOREIGN KEY(`uname`) REFERENCES `User`(`uname`)
);

CREATE TABLE `Follow`(
    `uname1` VARCHAR(60) NOT NULL,
    `uname2` VARCHAR(60) NOT NULL,
    `time` DATETIME NOT NULL,
    PRIMARY KEY(`uname1`, `uname2`),
    FOREIGN KEY(`uname1`) REFERENCES `User`(`uname`),
    FOREIGN KEY(`uname2`) REFERENCES `User`(`uname`)
);

CREATE TABLE `SearchHistory`(
    `uname` VARCHAR(60) NOT NULL,
    `keyword` VARCHAR(60) NOT NULL,
    `time` DATETIME NOT NULL,
    PRIMARY KEY(`uname`, `keyword`, `time`),
    FOREIGN KEY(`uname`) REFERENCES `User`(`uname`)
);

DROP TRIGGER IF EXISTS `trig_before_insert_pledge`;

DELIMITER //

CREATE TRIGGER `trig_before_insert_pledge` AFTER INSERT ON `Pledge`
FOR EACH ROW
BEGIN
    UPDATE `Project` AS P
    SET `curamount` = `curamount` + NEW.`amount`
    WHERE P.`pid` = NEW.`pid`; 

    IF EXISTS(
        SELECT *
        FROM `Project` AS P
        WHERE P.`pid` = NEW.`pid` AND `curamount` > `maxamount`
    ) THEN
        UPDATE `Project` AS P
        SET `status` = 'progressing',
            `actualendtime` = CURRENT_TIMESTAMP,
            `progress` = '0'
        WHERE P.`pid` = NEW.`pid`;
    END IF;
END;
//
DELIMITER ;

DROP EVENT IF EXISTS `event_charge`;

CREATE EVENT IF NOT EXISTS `event_charge` 
ON SCHEDULE EVERY 1 MINUTE 
DO 
UPDATE `Pledge` AS G 
SET `charged` = TRUE 
WHERE G.`charged` = FALSE AND G.`pid` IN (
    SELECT `pid` 
    FROM `Project` 
    WHERE `status` = 'progressing' OR `status` = 'completed'
);
