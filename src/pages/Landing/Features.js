import React from "react";
import FeatureCard from "./FeatureCard";
import "./Features.css";

let features = [

  {
    title: "Share Resources",
    points :[
        "Cost savings: Pooling resources enables affordable access to otherwise unaffordable items and cost sharing for larger purchases.",
        "Increased efficiency: Multiple people can use the same resources instead of each having to invest in their own.",
        "Collaborative opportunities: Foster collaboration, networking, and potential partnerships for common goals or projects.",
        "Social benefits: Sharing resources can also have social benefits, as it can bring people together and promote a sense of community.",
    ],
    image: "https://res.cloudinary.com/saienterprises/image/upload/v1681552646/share_resource_lu721s.jpg",
  },
  {
    title: "Doubts Resolution",
    points :[
        // "Ask your doubts and get them answered by the community.",
        "Increased clarity: Clearing doubts brings clarity, enabling better decisions and informed actions.",
        "Reduced anxiety: Uncertainty and doubt can create anxiety and stress but when they are resolved, your anxiety levels is reduced.",
        "Improved learning: Addressing doubts and questions enhances learning by providing necessary info and improving understanding.",
        "Increased confidence: Getting your doubts solved, you can increase your confidence and feel more capable and empowered.",
    ],
    image: "https://res.cloudinary.com/saienterprises/image/upload/v1681552646/doubt_hfsnon.jpg",
  },
  {
    title: "Make Relevant Connection",
    points :[
        "Get connected with like minded people.",
        "Professional networking: You learn about job opportunities, get introduced to key contacts in your industry, and expand your knowledge and skills..",
        "Improved communication skills: This helps you in improving listening, questioning, and effective idea communication.",
        "Increased self-confidence: Building connections and relationships boosts self-confidence through a reliable support system.",
    ],
    image: "https://res.cloudinary.com/saienterprises/image/upload/v1681552646/connection_z8bopl.jpg",
  },

];

const Features = () => {
  return (
    <>
      <h1 className="section__head">Features</h1>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.points}
            image={feature.image}
            isRotated={index % 2 === 0 ? false : true}
          />
        ))}
      </div>
    </>
  );
};

export default Features;
