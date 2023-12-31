import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";
import { imagePath } from "../../../config/index";
import React, { useEffect, useState } from "react";


const CategoryProduct4 = ({ catData, updateProductCategory }) => {

    const [divideCat, setDivideCat] = useState([])

    const router = useRouter();

    useEffect(() => {
        setDivideCat(splitToNChunks(catData, 3))
    }, [catData.length])

    const selectCategory = (e, category) => {
        e.preventDefault();
        // removeSearchTerm();
        updateProductCategory(category);
        router.push({
            pathname: "/products",
            query: {
                subCat: category, //
            },
        });
    };


    function splitToNChunks(arr, n) {
        var rest = arr.length % n, // how much to divide
            restUsed = rest, // to keep track of the division over the elements
            partLength = Math.floor(arr.length / n),
            result = [];

        for (var i = 0; i < arr.length; i += partLength) {
            var end = partLength + i,
                add = false;

            if (rest !== 0 && restUsed) { // should add one element for the division
                end++;
                restUsed--; // we've used one division element now
                add = true;
            }

            result.push(arr.slice(i, end)); // part of the array

            if (add) {
                i++; // also increment i in the case we added an extra element for division
            }
        }

        return result;
    }

    const submenu = (item) =>{
        const numOfCols = 3;
        const rowCount = 0;
        const bootstrapColWidth = 12 / numOfCols;

        return (
            <>
            {item.subcat.map((item2, i) => (
                <div className={`col-sm-${bootstrapColWidth}`}>
                    <ul>
                        <li onClick={(e) => selectCategory(e, item2.slug)}><a>{item2.sub_cat_name}</a></li>
                    </ul>
                </div>
            ))}
            </>
        )
    }

    return (
        <>
            <div className="sidebar close">
                {divideCat.map((catItem, i) => (
                    <ul className="nav-links">
                        {catItem.map((item, i) => (
                            <li>
                                <div className="iocn-link">
                                    <a href="#">
                                        <img
                                            src={`${imagePath+item.icon}`}
                                            alt=""
                                        />
                                        <span className="link_name"> {item.cat_name}</span>
                                    </a>
                                    <i className="bx bxs-chevron-down arrow" />
                                </div>
                                <ul className="sub-menu">
                                    <div className="container">
                                        <div className="row p-0">
                                            <img
                                                src={`${imagePath+item.banner}`}
                                                alt="logo"
                                                className="p-0"
                                                style={{height:'200px'}}
                                            />
                                        </div>
                                        <div className="row ">
                                            {submenu(item)}
                                            <div className="ul-fotter"></div>
                                        </div>
                                    </div>
                                </ul>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>

        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct4);
