import styles from './index.module.scss'
import React, { useState, useEffect } from "react";
import jsonData from '../../api/data.json';
const loadData = [...jsonData];

const MainBanner = () =>{

    const [data, setData] = useState([loadData]);
    const [searchData, setSearchData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(
            data[0].filter((i, d) => {
                    if(searchData.length>0)
                    return i.title.toLowerCase().includes(searchData.toLowerCase())
                }
            )
        );
    }, [searchData, data]);

    return (
      <div className={styles.mainbanner}>
          <div className={styles.mainbanner_inner}>
              <h2 className={styles.mainbanner_title}><span>Sorun Yaşıyorsanız</span>Yardım için buradayız.</h2>
              <div className={styles.mainbanner_search}>
                  <span className={styles.mainbanner_search_icon}></span>
                  <input type="text" 
                         className={styles.mainbanner_search_input}
                         onChange={(e) => setSearchData(e.target.value)}
                         placeholder={"Yardım makalelerinde ara..."} />
                  <div className={styles.mainbanner_search_result}>
                      <ul className={styles.mainbanner_search_result_items}>
                          {
                          filteredData?.map(item => (
                            <li  key={item.title}><span>{item.title}</span></li>
                          ))
                          }
                      </ul>
                  </div>
              </div>
          </div>
      </div>
)
}

export default MainBanner