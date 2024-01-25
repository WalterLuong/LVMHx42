import React from "react";
import { Link } from "react-router-dom";
import LVStore from "../../assets/LV-store.jpg";
import Timeline from "../../components/Timeline";
import { Info } from "../../components/Timeline";
import { fadeIn } from "../../utils/variants";
import { motion } from "framer-motion";

const Tutorial = () => {
    const info: Info[] = [
        {
            title: "Connectez-vous",
            description: "Connectez-vous avec votre compte LV pour vous identifier"
        },
        {
            title: "Rejoindre la queue virtuelle",
            description: "Une fois identifié vous pouvez rejoindre la queue virtuelle"
        },
        {
            title: "Vivez l'expérience LV autours de votre magasin en attendant",
            description: "Découvrez en attendant les experiences de luxes LV autours de votre magasin"
        },
        {
            title: "Recevez un SMS pour vous quand c'est votre tour",
            description: "Vous recevrez un SMS quand c'est votre tour pour entrer dans le magasin"
        }
    ]

    return <>
        <div className="bg-white h-screen w-screen overflow-hidden mt-[70px]">
            <div className="flex font-sans py-8 text-center items-center justify-center">
                <motion.h1 
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate="show"
                className="text-xl font-bold uppercase w-[80%]">Comment rejoindre la queue virtuel ?</motion.h1>
            </div>
            <div className="">
                <Timeline info={info} />
            </div>
            <div className=" flex flex-col justify-center items-center m-8">
                <Link to='/login'>
                    <button className="pr-10 border shadow-lg pl-10 pt-2 pb-2 bg-black text-white rounded-xl">Connectez vous</button>
                </Link>
            </div>
        </div>
    </>
}

export default Tutorial;