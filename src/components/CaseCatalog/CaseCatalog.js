import React from "react";
import { SearchInputBasic } from "../Inputs";
import ComboBox from "../ComboBox/ComboBox";
import './CaseCatalog.css';
import { CaseCatalogCard } from "../Cards";
import { CaseCatalogCardInfo } from "../../constant/group";
import { DefaultButton } from "../Buttons";


const CaseCatalog = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="section">
                    <div className="casesTopic">
                        <p className="casesTitle">Кейсы</p>
                        <p className="casesNum">16</p>
                    </div>
                    <SearchInputBasic />
                    <div className="caseCatalogContainer">
                        <ComboBox />
                        <div>
                            <div className="caseCatalogCardContainer ">

                                {
                                    CaseCatalogCardInfo.map((item, index) => (
                                        <CaseCatalogCard key={index} item={item} />
                                    ))
                                }
                            </div>
                            <div className="moreButton">
                                <DefaultButton title="смотреть ещё кейсы" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CaseCatalog;