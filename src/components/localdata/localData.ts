export interface CatCardData {
    id: number;
    name: string;
    qun: string;
    img: string;
    imgColor: string;
    imgShape: string;
}

export interface CityCardData {
    id: number;
    name: string;
    qun: string;
    img: string;
}

export interface BestPropertyData {
    id: number;
    img: string;
    dis: string;
    allUpdate: string;
    agent: string;
    agentImg: string;
    title: string;
    location: string;
    price: string;
}

export interface IndustriesTypeData {
    id: number;
    icon: string;
    name: string;
    desc: string;
    btn: string;
}

export interface ReadyPropertyData {
    id: number;
    name: string;
    location: string;
    img: string;
    dis: string;
    price: number;
    agentImg: string;
}

export interface FeedbackData {
    id: number;
    img: string;
    title: string;
    desc: string;
    name: string;
    deg: string;
}

export interface BlogPostData {
    id: number;
    title: string;
    date: string;
    user: string;
    img: string;
}

export interface HeroSliderData {
    id: number;
    title: string;
}

export interface CitySliderData {
    id: number;
    img: string;
    title: string;
    total: number;
}

export interface IndustriesTypeSliderData {
    id: number;
    title: string;
    img: string;
    imgColor: string;
    total: number;
}

export interface PortfolioProjectData {
    id: number;
    type: string;
    title: string;
    location: string;
    price: string;
}

export interface AgentData {
    id: number;
    name: string;
    designation: string;
    number: string;
    review: string;
    img: string;
}

export interface FaqCounterData {
    id: number;
    count: string;
    desc: string;
}

export interface FaqData {
    id: number;
    title: string;
    content: string;
}

export interface TestimonialData {
    id: number;
    title: string;
    desc: string;
    name: string;
    designation: string;
    img: string;
}

export interface PartnerImage {
    id: number;
    img: string;
}

export interface WhyData {
    id: number;
    title: string;
    desc: string;
    img: string;
}

export interface CityThreeData {
    id: number;
    name: string;
    qun: string;
    img: string;
}

export interface FeedbackTwoData {
    id: number;
    name: string;
    designation: string;
    title: string;
    content: string;
    logo: string;
}

export interface AddressData {
    id: number;
    name: string;
    number: string;
    location: string;
}

export interface BlogListData {
    id: number;
    img: string;
    type: string;
    date: string;
    author: string;
    title: string;
    content: string;
}

export interface AgencyListData {
    id: number;
    name: string;
    location: string;
    content: string;
    img: string;
}

export interface PropertyReviewData {
    id: number;
    name: string;
    date: string;
    content: string;
    img: string;
}

export interface OffSubItem {
    subItemTitle: string;
    subItemLink: string;
}

export interface OffNavItem {
    title: string;
    link: string;
    subItems?: OffSubItem[];
}

export const catCardDatas: CatCardData[] = [
    {
        "id": 1,
        "name": "Apartments",
        "qun": "14 Properties",
        "img": "img/card-1.png",
        "imgColor": "img/card-color-1.png",
        "imgShape": "img/card-shape-1.png",
    },
    {
        "id": 2,
        "name": "Houses",
        "qun": "10 Properties",
        "img": "img/card-2.png",
        "imgColor": "img/card-color-2.png",
        "imgShape": "img/card-shape-2.png",
    },
    {
        "id": 3,
        "name": "Office",
        "qun": "11 Properties",
        "img": "img/card-3.png",
        "imgColor": "img/card-color-3.png",
        "imgShape": "img/card-shape-3.png",
    },
    {
        "id": 4,
        "name": "Apartments",
        "qun": "18 Properties",
        "img": "img/card-4.png",
        "imgColor": "img/card-color-4.png",
        "imgShape": "img/card-shape-4.png",
    },
    {
        "id": 5,
        "name": "Townhome",
        "qun": "27 Properties",
        "img": "img/card-5.png",
        "imgColor": "img/card-color-5.png",
        "imgShape": "img/card-shape-5.png",
    }
]

export const cityCardData: CityCardData[] = [
    {
        "id": 1,
        "name": "New York",
        "qun": "14 Properties",
        "img": "img/city-1.png",
    },
    {
        "id": 2,
        "name": "Indonesia",
        "qun": "10 Properties",
        "img": "img/city-2.png",
    },
    {
        "id": 3,
        "name": "Los Angeles",
        "qun": "12 Properties",
        "img": "img/city-1.png",
    },
    {
        "id": 4,
        "name": "Tokyo",
        "qun": "19 Properties",
        "img": "img/city-4.png",
    },
    {
        "id": 5,
        "name": "Indonesia",
        "qun": "22 Properties",
        "img": "img/city-5.png",
    }
]

export const BestPropertyDatas: BestPropertyData[] = [
    {
        "id": 1,
        "img": "img/property-1.png",
        "dis": "-10%",
        "allUpdate": "For Rent",
        "agent": "Logan Deo Jhon",
        "agentImg": "img/agent-1.png",
        "title": "GMC Aero Square",
        "location": "2 3 Devanahalli Bangalore",
        "price": "$18,000"
    },
    {
        "id": 2,
        "img": "img/property-2.png",
        "dis": "-15%",
        "allUpdate": "For Sale",
        "agent": "Logan Jhon",
        "agentImg": "img/agent-1.png",
        "title": "Newyork Apartment",
        "location": "2,3 Devanahalli, Bangalore",
        "price": "$21,000"
    },
    {
        "id": 3,
        "img": "img/property-3.png",
        "dis": "-30%",
        "allUpdate": "For Rent",
        "agent": "Jhon Deo",
        "agentImg": "img/agent-1.png",
        "title": "Stay grand prime",
        "location": "Hill N dale drivert, mi 4352",
        "price": "$25,000"
    },
    {
        "id": 4,
        "img": "img/property-4.png",
        "dis": "-10%",
        "allUpdate": "For Sale",
        "agent": "Jhon Logan",
        "agentImg": "img/agent-1.png",
        "title": "Quality House For Sale",
        "location": "28 Rogers Rd york, 0987 ",
        "price": "$28,000"
    },
    {
        "id": 5,
        "img": "img/property-3.png",
        "dis": "-10%",
        "allUpdate": "For Rent",
        "agent": "Jhon Logan",
        "agentImg": "img/agent-1.png",
        "title": "Stay grand prime guest",
        "location": "Hill N dale drivert, mi 4352",
        "price": "$25,000"
    },
    {
        "id": 6,
        "img": "img/property-5.png",
        "dis": "-50%",
        "allUpdate": "For Sale",
        "agent": "Jhon Logan",
        "agentImg": "img/agent-1.png",
        "title": "Pg paying guest ladies",
        "location": "Mahatma gandi road",
        "price": "$21,000"
    }
]

export const industriesTypeData: IndustriesTypeData[] = [
    {
        "id": 1,
        "icon": "img/industrie-1.png",
        "name": "Buy a property",
        "desc": "Built on centuries of tradition and dedicated to innovating the luxury real estate",
        "btn": "Find a home",
    },
    {
        "id": 2,
        "icon": "img/industrie-2.png",
        "name": "Sell a property",
        "desc": "Built on centuries of tradition and dedicated to innovating the luxury real estate",
        "btn": "Find a home",
    },
    {
        "id": 3,
        "icon": "img/industrie-3.png",
        "name": "Rent a property",
        "desc": "Built on centuries of tradition and dedicated to innovating the luxury real estate",
        "btn": "Find a home",
    },
    {
        "id": 4,
        "icon": "img/industrie-4.png",
        "name": "Paying guest",
        "desc": "Built on centuries of tradition and dedicated to innovating the luxury real estate",
        "btn": "Find a home",
    }
]

export const ReadyPropertyData: ReadyPropertyData[] = [
    {
        "id": 1,
        "name": "GMC Aero Square",
        "location": "1421 San Pedro st, Los Angles",
        "img": "img/ready-1.png",
        "dis": "-10%",
        "price": 18000,
        "agentImg": "img/agent-1.png",
    },
    {
        "id": 2,
        "name": "GMC Aero New",
        "location": "1421 San Pedro st, Los Angles",
        "img": "img/ready-2.png",
        "dis": "-20%",
        "price": 11000,
        "agentImg": "img/agent-1.png",
    },
    {
        "id": 3,
        "name": "New-york Apartment",
        "location": "1421 San Pedro st, Los Angles",
        "img": "img/ready-3.png",
        "dis": "-28%",
        "price": 24000,
        "agentImg": "img/agent-1.png",
    },
    {
        "id": 4,
        "name": "Quality house For sale",
        "location": "1421 San Pedro st, Los Angles",
        "img": "img/ready-4.png",
        "dis": "-68%",
        "price":8000,
        "agentImg": "img/agent-1.png",
    }
]


export const FeedbackDatas: FeedbackData[] = [
    {
        id: 1,
        img: "img/feedback-1.png",
        title: "Awesome Real-estate  Apartment  Building",
        desc: "This is probably the most underrated design and user experience agency in the world. The quality of the designs are incredible denounce with righteous.",
        name: "Mathio Shena deo",
        deg: "CEO Of Amajondot",
    },
    {
        id: 2,
        img: "img/feedback-2.png",
        title: "Your Real Estate agent htmlFor Ingolstadt and",
        desc: "This is probably the most underrated design and user experience agency in the world. The quality of the designs are incredible denounce with righteous.",
        name: "Mathio  deo",
        deg: "CEO Of Amajondot",
    },
    {
        id: 3,
        img: "img/feedback-1.png",
        title: "Awesome Real-estate  Apartment  Building",
        desc: "This is probably the most underrated design and user experience agency in the world. The quality of the designs are incredible denounce with righteous.",
        name: "Mathio Shena deo",
        deg: "CEO Of Amajondot",
    }
]

export const BlogPostDatas: BlogPostData[] = [
    {
        "id": 1,
        "title": "How to get your real estate license in missouri",
        "date": "April 18, 2023",
        "user": "Locan Angelo Perara",
        "img": "img/blog-post-1.png"
    },
    {
        "id": 2,
        "title": "Skills that you can learn in the real estate market",
        "date": "April 14, 2023",
        "user": "Locan Perara",
        "img": "img/blog-post-2.png"
    },
    {
        "id": 3,
        "title": "5 Essential Steps htmlFor Buying everyone Investment",
        "date": "April 24, 2023",
        "user": "Perara Locan",
        "img": "img/blog-post-3.png"
    }
]

export const HeroSliderDatas: HeroSliderData[] = [
    {
        id: 1,
        title: "Buying & Selling Property In An Easy Way"
    },
    {
        id: 2,
        title: "Buying & Selling Property In An Easy Way"
    },
    {
        id: 3,
        title: "Buying & Selling Property In An Easy Way"
    }
]

export const CitySliderDatas: CitySliderData[] = [
    {
        id: 1,
        img: "img/city-slide-1.png",
        title: "New York",
        total: 10
    },
    {
        id: 2,
        img: "img/city-slide-2.png",
        title: "Turkey",
        total: 20
    },
    {
        id: 3,
        img: "img/city-slide-3.png",
        title: "Italy",
        total: 50
    },
    {
        id: 4,
        img: "img/city-slide-4.png",
        title: "United Kingdom",
        total: 10
    },
    {
        id: 5,
        img: "img/city-slide-2.png",
        title: "United Kingdom",
        total: 10
    }
]

export const IndustriesTypeSliderDatas: IndustriesTypeSliderData[] = [
    {
        id: 1,
        title: "Apartments",
        img: "img/card-1.png",
        imgColor: "img/card-color-1-white.png",
        total: 14
    },
    {
        id: 2,
        title: "Townhome",
        img: "img/card-2.png",
        imgColor: "img/card-color-2-white.png",
        total: 11
    },
    {
        id: 3,
        title: "Office",
        img: "img/card-3.png",
        imgColor: "img/card-color-3-white.png",
        total: 15
    },
    {
        id: 4,
        title: "Apartments",
        img: "img/card-4.png",
        imgColor: "img/card-color-4-white.png",
        total: 24
    },
    {
        id: 5,
        title: "Bungalow",
        img: "img/card-2.png",
        imgColor: "img/card-color-2-white.png",
        total: 19
    }
]


export const PortfolioProjectDatas: PortfolioProjectData[] = [
    {
        id: 1,
        type: "Rera Approved",
        title: "Residential Construction Site in San Fransico",
        location: "West Hollywood, CA 90069",
        price: "$14,1000"
    },
    {
        id: 2,
        type: "Rera Approved",
        title: "Residential Construction Site in San Fransico",
        location: "West Hollywood, CA 90069",
        price: "$14,1000"
    }
]

export const AgentDatas: AgentData[] = [
    {
        id: 1,
        name: "Logan Deo Rom",
        designation: "Mortgage Advisor",
        number: "123 3214569871",
        review: "221 Reviews",
        img: "img/agent-list-1.png"
    },
    {
        id: 2,
        name: "Odette R. Jones",
        designation: "Mortgage Advisor",
        number: "978-400-4579",
        review: "201 Reviews",
        img: "img/agent-list-2.png"
    },
    {
        id: 3,
        name: "Thomas Stevenson",
        designation: "Mortgage Advisor",
        number: "717-943-5237",
        review: "101 Reviews",
        img: "img/agent-list-3.png"
    },
    {
        id: 4,
        name: "Michael M. Weeks",
        designation: "Mortgage Advisor",
        number: "815-957-6541",
        review: "104 Reviews",
        img: "img/agent-list-4.png"
    },
    {
        id: 5,
        name: "Jared P. Austin",
        designation: "Mortgage Advisor",
        number: "815-957-6541",
        review: "104 Reviews",
        img: "img/agent-list-5.png"
    },
    {
        id: 6,
        name: "William M. Perkins",
        designation: "Mortgage Advisor",
        number: "815-957-6541",
        review: "104 Reviews",
        img: "img/agent-list-6.png"
    },
    {
        id: 7,
        name: "Bruce V. Martin",
        designation: "Mortgage Advisor",
        number: "815-957-6541",
        review: "104 Reviews",
        img: "img/agent-list-7.png"
    },
    {
        id: 8,
        name: "Stephen K. Smith",
        designation: "Mortgage Advisor",
        number: "815-957-6541",
        review: "104 Reviews",
        img: "img/agent-list-8.png"
    }
]

export const FaqCounterDatas: FaqCounterData[] = [
    {
        id: 1,
        count: "34,000",
        desc: "Total sqft Areas"
    },
    {
        id: 2,
        count: "890+",
        desc: "Total car parking"
    },
    {
        id: 3,
        count: "599+",
        desc: "Luxury Apartment"
    }
]

export const FaqDatas: FaqData[] = [
    {
        id: 1,
        title: "Will you be updating the program?",
        content: "Energistically network customized deliverables after mission-critical leadership. Dramatically engineer highly efficient ROI and exceptional growth strategies.Quickly engineer backend opportunities htmlFor backend solutions."
    },
    {
        id: 2,
        title: "Learn how create unmatched solutions",
        content: "Energistically network customized deliverables after mission-critical leadership. Dramatically engineer highly efficient ROI and exceptional growth strategies.Quickly engineer backend opportunities htmlFor backend solutions."
    },
    {
        id: 3,
        title: "Will you be updating the program?",
        content: "Energistically network customized deliverables after mission-critical leadership. Dramatically engineer highly efficient ROI and exceptional growth strategies.Quickly engineer backend opportunities htmlFor backend solutions."
    },
    {
        id: 4,
        title: "Will you be updating the program?",
        content: "Energistically network customized deliverables after mission-critical leadership. Dramatically engineer highly efficient ROI and exceptional growth strategies.Quickly engineer backend opportunities htmlFor backend solutions."
    },
    {
        id: 5,
        title: "Does access include checklists?",
        content: "Energistically network customized deliverables after mission-critical leadership. Dramatically engineer highly efficient ROI and exceptional growth strategies.Quickly engineer backend opportunities htmlFor backend solutions."
    },
    {
        id: 6,
        title: "How I can optimize voice search?",
        content: "Energistically network customized deliverables after mission-critical leadership. Dramatically engineer highly efficient ROI and exceptional growth strategies.Quickly engineer backend opportunities htmlFor backend solutions."
    }
]

export const TestimonialDatas: TestimonialData[] = [
    {
        id: 1,
        title: "Awesome Real-estate  Apartment Design",
        desc: "This is probably the most underrated design and user experience agency in the world. The quality of the designs are incredible denounce with righteous.",
        name: "Mathio Shena deo",
        designation: "CEO Of Amajondot",
        img: "img/testimonial-1.png"
    },
    {
        id: 2,
        title: "Awesome Real-estate  Apartment  Building",
        desc: "This is probably the most underrated design and user experience agency in the world. The quality of the designs are incredible denounce with righteous.",
        name: "Mathio Shena deo",
        designation: "CEO Of Amajondot",
        img: "img/testimonial-1.png"
    },
    {
        id: 3,
        title: "Awesome Real-estate  Apartment Design",
        desc: "This is probably the most underrated design and user experience agency in the world. The quality of the designs are incredible denounce with righteous.",
        name: "Mathio Shena deo",
        designation: "CEO Of Amajondot",
        img: "img/testimonial-1.png"
    },
    {
        id: 4,
        title: "Awesome Real-estate  Apartment Design",
        desc: "This is probably the most underrated design and user experience agency in the world. The quality of the designs are incredible denounce with righteous.",
        name: "Mathio Shena deo",
        designation: "CEO Of Amajondot",
        img: "img/testimonial-1.png"
    }
]

export const PartnerImages: PartnerImage[] = [
    {
        id: 1,
        img: "img/partner-1.png",
    },
    {
        id: 2,
        img: "img/partner-2.png",
    },
    {
        id: 3,
        img: "img/partner-3.png",
    }
]

export const WhyDatas: WhyData[] = [
    {
        id: 1,
        title: "Buy Property",
        desc: "Built on centuries of tradition and dedicated to innovating the luxury real estate industry nternational",
        img: "img/why-img-1.png",
    },
    {
        id: 2,
        title: "Sell a Property",
        desc: "Built on centuries of tradition and dedicated to innovating the luxury real estate industry nternational",
        img: "img/why-img-2.png",
    },
    {
        id: 3,
        title: "Rent a Property",
        desc: "Built on centuries of tradition and dedicated to innovating the luxury real estate industry nternational",
        img: "img/why-img-3.png",
    }
]

export const CityThreeDatas: CityThreeData[] = [
    {
        id: 1,
        name: "New York",
        qun: "10 Property",
        img: "img/city-three-1.png",
    },
    {
        id: 2,
        name: "Tokyo",
        qun: "10 Property",
        img: "img/city-three-2.png",
    },
    {
        id: 3,
        name: "Shanghai",
        qun: "10 Property",
        img: "img/city-three-3.png",
    },
    {
        id: 4,
        name: "Mumbai",
        qun: "10 Property",
        img: "img/city-three-4.png",
    },
    {
        id: 5,
        name: "Shenzhen",
        qun: "10 Property",
        img: "img/city-three-5.png",
    },
    {
        id: 6,
        name: "Bangladesh",
        qun: "20 Property",
        img: "img/city-three-6.png",
    }
]

export const FeedbackTwoDatas: FeedbackTwoData[] = [
    {
        id: 1,
        name: "Toyful Hasan",
        designation: "CEO Of Amajondot",
        title: "They Did An Amazing Work For Home",
        content: "Built on centuries of tradition and dedicated to innovating the luxury real estate industry ",
        logo: "img/feedback-two-logo.png "
    },
    {
        id: 2,
        name: "Galib Hasan",
        designation: "CEO Of CBD",
        title: "Awesome support cityblok agent",
        content: "Built on centuries of tradition and dedicated to innovating the luxury real estate industry ",
        logo: "img/feedback-two-logo.png "
    },
    {
        id: 3,
        name: "Toyful Hasan",
        designation: "CEO Of Amajondot",
        title: "They Did An Amazing Work For Home",
        content: "Built on centuries of tradition and dedicated to innovating the luxury real estate industry ",
        logo: "img/feedback-two-logo.png "
    },
    {
        id: 4,
        name: "Toyful Hasan",
        designation: "CEO Of Amajondot",
        title: "They Did An Amazing Work For Home",
        content: "Built on centuries of tradition and dedicated to innovating the luxury real estate industry ",
        logo: "img/feedback-two-logo.png "
    }
]

export const AddressDatas: AddressData[] = [
    {
        id: 1,
        name: "New York, NY",
        number: "+123 3214569871",
        location: "Manhattan, 4661 Penn Ave,New York"
    },
    {
        id: 2,
        name: "Paris",
        number: "+123 3214569871",
        location: "Manhattan, 4661 Penn Ave,New York"
    },
    {
        id: 3,
        name: "India",
        number: "+123 3214569871",
        location: "Manhattan, 4661 Penn Ave,New York"
    }
]

export const BlogListDatas: BlogListData[] = [
    {
        id: 1,
        img: "img/blog-list-img-1.png",
        type: "Real Estate",
        date: "Oct 29, 2023",
        author: "Angelo Perara",
        title: "Ways To Choose Fruits & Seafoods Good For Pregnancy",
        content: "Professionally build unique markets via parallel total linkage. Monotonectally maximi corporate intellectual capital whereas granular catalysts htmlFor change. Assertively provide access to inexpensive."
    },
    {
        id: 2,
        img: "img/blog-list-img-2.png",
        type: "Real Estate",
        date: "Oct 29, 2023",
        author: "Angelo Perara",
        title: "Entire rental unit hosted by Paris Perfect",
        content: "Professionally build unique markets via parallel total linkage. Monotonectally maximi corporate intellectual capital whereas granular catalysts htmlFor change. Assertively provide access to inexpensive."
    },
    {
        id: 3,
        img: "img/blog-list-img-3.png",
        type: "Real Estate",
        date: "Oct 29, 2023",
        author: "Angelo Perara",
        title: "Ways To Choose Fruits & Seafoods Good For Pregnancy",
        content: "Professionally build unique markets via parallel total linkage. Monotonectally maximi corporate intellectual capital whereas granular catalysts htmlFor change. Assertively provide access to inexpensive."
    }
]

export const AgencyListDatas: AgencyListData[] = [
    {
        id: 1,
        name: "City Hall LTD.",
        location: "Manhattan, New York",
        content: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors Laminate flooring is a more affordable option in place",
        img: "img/agency-list-1.png"
    },
    {
        id: 2,
        name: "ReHome Property",
        location: "Manhattan, New York",
        content: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors Laminate flooring is a more affordable option in place",
        img: "img/agency-list-2.png"
    },
    {
        id: 3,
        name: "Paint City Apartment",
        location: "Manhattan, New York",
        content: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors Laminate flooring is a more affordable option in place",
        img: "img/agency-list-3.png"
    },
    {
        id: 4,
        name: "Leasy Apartment LTD",
        location: "Manhattan, New York",
        content: "Beautiful Huge 1 Family House In Heart Of Westbury. Newly Renovated With New Wood Floors Laminate flooring is a more affordable option in place",
        img: "img/agency-list-4.png"
    }
]

export const PropertyReviewDatas: PropertyReviewData[] = [
    {
        id: 1,
        name: "Randy K. Melton",
        date: "13/06/2023",
        content: "Carmela was a great host, she was always ready to help and answer questions. There was no problem with different checking in hours (with asking about it beforehand).",
        img: "img/pg-single-feedback-1.png"
    },
    {
        id: 2,
        name: "Anthony",
        date: "13/06/2023",
        content: "Carmela was a great host, she was always ready to help and answer questions. There was no problem with different checking in hours (with asking about it beforehand).",
        img: "img/pg-single-feedback-2.png"
    },
    {
        id: 3,
        name: "Mattia",
        date: "13/06/2023",
        content: "Carmela was a great host, she was always ready to help and answer questions. There was no problem with different checking in hours (with asking about it beforehand).",
        img: "img/pg-single-feedback-3.png"
    },
    {
        id: 4,
        name: "Daniel",
        date: "13/06/2023",
        content: "Carmela was a great host, she was always ready to help and answer questions. There was no problem with different checking in hours (with asking about it beforehand).",
        img: "img/pg-single-feedback-4.png"
    },
    {
        id: 5,
        name: "Nadia",
        date: "13/06/2023",
        content: "Carmela was a great host, she was always ready to help and answer questions. There was no problem with different checking in hours (with asking about it beforehand).",
        img: "img/pg-single-feedback-5.png"
    },
    {
        id: 6,
        name: "Katerina",
        date: "13/06/2023",
        content: "Carmela was a great host, she was always ready to help and answer questions. There was no problem with different checking in hours (with asking about it beforehand).",
        img: "img/pg-single-feedback-6.png"
    }
]

export const OffNavItems: OffNavItem[] = [
    {
        title: "Home",
        link: "#",
        subItems: [
            {
                subItemTitle: "Home One",
                subItemLink: "/home",
            },
            {
                subItemTitle: "Home Two",
                subItemLink: "/home-2",
            },
            {
                subItemTitle: "Home Three",
                subItemLink: "/home-3",
            }
        ]
    },
    {
        title: "Agency",
        link: "#",
        subItems: [
            {
                subItemTitle: "Agency List",
                subItemLink: "/agency-list",
            },
            {
                subItemTitle: "Agency Single",
                subItemLink: "/agency-single",
            },
        ]
    },
    {
        title: "Pages",
        link: "#",
        subItems: [
            {
                subItemTitle: "About Us",
                subItemLink: "/about",
            },
            {
                subItemTitle: "Agent List",
                subItemLink: "/agents-list",
            },
            {
                subItemTitle: "Agent Single",
                subItemLink: "/agent-single",
            },
            {
                subItemTitle: "Listing Single",
                subItemLink: "/pg-single",
            },
            {
                subItemTitle: "Add Listing",
                subItemLink: "/add-post",
            },
            {
                subItemTitle: "Faq",
                subItemLink: "/faq",
            },
            {
                subItemTitle: "404",
                subItemLink: "/404",
            }
        ]
    },
    {
        title: "Blog",
        link: "#",
        subItems: [
            {
                subItemTitle: "Blog List",
                subItemLink: "/blog-list",
            },
            {
                subItemTitle: "Blog Single",
                subItemLink: "/blog-single",
            },
        ]
    },
    {
        title: "Contact",
        link: "/contact",
    }
]
