import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function company() {
  const router = useRouter();
  const [oneDetail, setOneDetail] = useState({});
  const [allData, setAllData] = useState();
  const { company } = router.query;

  useEffect(() => {
    const companyData = function () {
      if (company) {
        fetch(
          `http://localhost:3000/api/company?title=${company}
          `
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            // console.log(data);
            setOneDetail(data);
          });
      }
    };
    companyData();
  }, [company]);

  useEffect(() => {
    const allCompanyData = function () {
      fetch("http://localhost:3000/api/staticdata")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const filterData = [];
          data.forEach((element) => {
            if (element.company_title != oneDetail.company_title) {
              if (element.locality.includes(oneDetail.locality)) {
                filterData.push(element);
              }
            }
          });
          setAllData(filterData);
        });
      console.log(allData);
    };
    allCompanyData();
  }, [oneDetail.locality]);

  return (
    <>
      <div>{console.log(oneDetail?.locality)}</div>
    </>
  );
}

export default company;
