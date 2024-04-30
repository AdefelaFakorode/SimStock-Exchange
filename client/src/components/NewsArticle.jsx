import react from "react";
import LPNavBar from '../components/LSI_NavBar/LPNavBar';


function NewsArticle(props) {
    const dateTime = props.publish;
    const date = dateTime.split("T")[0];

    return (
        <>
        <div className ="flex justify-center flex-col items-center">
            <div className="container w-3/4 p-3 my-10 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
                <h2 className="text-lg md:text-xl lg:text-2xl text-black font-bold underline p-2 text-center">{props.title}</h2>
                <div className="p-2 text-xs md:text-sm lg:text-lg flex justify-between flex-row text-black">
                    <h6 className="">Author: {props.author}</h6>
                    <h6 className="">Date Published: {date}</h6>
                </div>
                <div className="text-black">
                    <div className="flex justify-center items-center p-2">
                        <img className="xl:w-10/12 xl:h-3/4" src={props.image} alt="" />
                    </div>
                    <p className="p-2 text-sm md:text-base lg:text-xl">{props.description}</p>
                    <a className="p-2 text-sm md:text-base lg:text-lg text-blue-500 hover:text-blue-700 p-2 my-2" href={props.url} target="blank">Click Here to Read the Full Article</a>
                </div>
            </div>
        </div>
        </>
    );
}

export default NewsArticle;