import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaPinterest, FaWhatsapp } from "react-icons/fa";

const SocialShare = ({ socialColor, socialName, url, title, image }) => {
  const getSocialLink = () => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedImage = image ? encodeURIComponent(image) : '';
    
    switch (socialName.toLowerCase()) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
      case 'whatsapp':
        return `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
      case 'linkedin':
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
      case 'pinterest':
        return `https://pinterest.com/pin/create/button/?url=${encodedUrl}&media=${encodedImage}&description=${encodedTitle}`;
      default:
        return '#';
    }
  };

  const getIcon = () => {
    switch (socialName.toLowerCase()) {
      case 'facebook':
        return <FaFacebook className="mr-2" />;
      case 'twitter':
        return <FaTwitter className="mr-2" />;
      case 'whatsapp':
        return <FaWhatsapp className="mr-2" />;
      case 'linkedin':
        return <FaLinkedin className="mr-2" />;
      case 'pinterest':
        return <FaPinterest className="mr-2" />;
      default:
        return null;
    }
  };

  const handleShare = (e) => {
    e.preventDefault();
    window.open(getSocialLink(), '_blank', 'width=600,height=400');
  };

  return (
    <a 
      href={getSocialLink()} 
      onClick={handleShare}
      className={`h-[41px] px-[30px] py-[15px] ${socialColor} rounded-[14px] inline-flex justify-center items-center cursor-pointer transition-transform hover:scale-105`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Share on ${socialName}`}
    >
      <div className="text-white text-base font-semibold font-primary capitalize flex items-center">
        {getIcon()}
        {socialName}
      </div>
    </a>
  );
};

export default SocialShare;