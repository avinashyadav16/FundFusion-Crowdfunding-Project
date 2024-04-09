// Define the ICampaign interface
const ICampaign = {
    id: "",
    title: "",
    description: "",
    createdAt: "",
    mainImage: "",
    createdBy: "",
    daysLeft: 0,
    amountRaised: "",
    goal: "",
    contributors: 0,
    createdByImage: "",
    category: "",
    country: "",
    type: "" | null
};

// Define the ITestimonial interface
const ITestimonial = {
    id: "",
    testimonial: "",
    createdBy: "",
    createdByImage: "",
    company: "",
    jobPosition: ""
};

// Define the ICountry interface
const ICountry = {
    name: "",
    code: "",
    emoji: "",
    unicode: "",
    image: ""
};

// Define the ICurrency interface
const ICurrency = {
    cc: "",
    symbol: "",
    name: ""
};