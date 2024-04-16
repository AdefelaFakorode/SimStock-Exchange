import react from "react";
import LPNavBar from '../components/LSI_NavBar/LPNavBar';


function NewsArticle(props) {
    const dateTime = props.publish;
    const date = dateTime.split("T")[0];

    return (
        <>
            <div className="container p-1 my-4">
                <h2 className="text-lg md:text-xl lg:text-2xl text-[#8a1e85] font-bold underline p-2 text-center">{props.title}</h2>
                <div className="p-2 text-xs md:text-sm lg:text-lg flex justify-between text-[#e4d5f6]">
                    <h6 className="">Author: {props.author}</h6>
                    <h6 className="">Date Published: {date}</h6>
                </div>
                <div className="text-[#e4d5f6]">
                    <img className="p-2" src={props.image} alt="" />
                    <p className="p-2 text-sm md:text-base lg:text-xl">{props.description}</p>
                    <a className="text-sm md:text-base lg:text-lg text-blue-500 hover:text-blue-700 p-2 my-2" href={props.url}>Click Here to Read the Full Article</a>
                </div>
            </div>
        </>
    );
}

export default NewsArticle;