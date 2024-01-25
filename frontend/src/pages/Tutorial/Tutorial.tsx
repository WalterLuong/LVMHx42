import React from "react";
import { Link } from "react-router-dom";
import LVStore from "../../assets/LV-store.jpg";
import Timeline from "../../components/Timeline";
import { Info } from "../../components/Timeline";

const Tutorial = () => {
    const info: Info[] = [
        {
            title: "Être déja client fidèle chez LV",
            description: "Il faut avoir efectué au moins un achat chez LV"
        },
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
        <div className="bg-white h-screen w-screen overflow-hidden">
            <div className="mt-[100px]">
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