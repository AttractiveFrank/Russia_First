import React from "react";
import { SearchInputBasic } from "../Inputs";
import ComboBox from "../ComboBox/ComboBox";
import './CaseCatalog.css';
import { CaseCatalogCard } from "../Cards";
import { CaseCatalogCardInfo } from "../../constant/group";


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
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <ComboBox />
                        <div className="caseCatalogCardContainer">
                            {
                                CaseCatalogCardInfo.map((item, index) => (
                                    <CaseCatalogCard key={index} item={item} />
                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default CaseCatalog;