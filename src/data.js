export const config = {
  portfolio: {
    portfolioLogo: "Portfolio",
    projectCard: {
      cards: [
        {
          heading: "Super Resolution Image using ESRGAN",
          description:
            "The Project aim is to Generate High Resolution image of Low resolution image. For this task I implement ESRGAN using PyTorchfrom scratch. I also made web app using streamlit and also created an API using FastAPI.",
          animationDelay: "300",
          buttonLink:
            "https://github.com/AquibPy/Enhanced-Super-Resolution-GAN",
          buttonText: "CHECK OUT",
        },
        {
          heading: "Satellite Image to Google Map using Pix2Pix",
          description:
            "In this project, I used Pix2Pix Conditional GAN to generate satellite image to Google Map. The project is implemented using PyTorch. I had also created a web app for this project in which I used FastAPI to create API for the model and streamlit for UI. ",
          animationDelay: "500",
          buttonLink: "https://github.com/AquibPy/Pix2Pix-Conditional-GANs",
          buttonText: "CHECK OUT",
        },
        {
          heading: "HaSa",
          description:
            "HaSa is an web application based on simple machine learning algorithms like Naive Bayes Algorithm and NLP techniques which specifies whether a given text is depressing or not. Deployed on Docker and Heroku and also built CI/CD pipeline. ",
          animationDelay: "700",
          buttonLink: "https://github.com/AquibPy/HaSa",
          buttonText: "CHECK OUT",
        },
        {
          heading: "Generative AI UseCases",
          description: "Many APIs using Generative AI",
          animationDelay: "900",
          // buttonLink: "",
          buttonText: "CHECK OUT",
        },
        // {
        //   heading: "Under Construction",
        //   description: "</>",
        //   animationDelay: "1100",
        //   buttonText: "",
        // },
      ],
    },
    internships: {
      internship: [
        {
          companyName: "Wobot Intelligence",
          role: "Computer Vision Intern",
          introText: "",
          duration: "10/2021 - 03/2022",
          keyPointOne:
            "Implemented YOLOv5 for real-time vehicle detection within specified Regions of Interest (ROIs)",
          keyPointTwo:
            "Employed object detection algorithms to differentiate between occupied and vacant parking spaces.",
          keyPointThree:
            "Developed functionality for automatic counting of occupied and vacant ROIs.",
          keyPointFour:
            "Enhanced parking management systems by integrating advanced computer vision methodologies for accurate vehicle detection and space utilization analysis.",
          offsetValue: "0",
        },
      ],
    },
  },
};

export default config;
