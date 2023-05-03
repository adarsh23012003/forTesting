// import React, { useEffect, useState } from "react";
// import ListingCard from "../components/ListingCard";
// import SearchMenu from "../components/Search";
// import Pagination from "../components/Pagination";
// import { useRouter } from "next/router";
// import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const index = () => {
  // const [data, setData] = useState();
  // const router = useRouter();
  // const [searchData, setSearchData] = useState([]);

  // In pagination data fetching
  // useEffect(() => {
  //   function ListingCardDetail() {
  //     fetch(
  //       `http://localhost:3000/api/staticdata?page=${
  //         router.query.page ? router.query.page : 1
  //       }`
  //     )
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setData(data?.data);
  //         console.log(data);
  //       });
  //   }
  //   ListingCardDetail();
  // }, [router.query.page]);

  // In search data fetching
  // useEffect(() => {
  //   const search = function () {
  //     if (router.query.cities) {
  //       fetch(
  //         `http://localhost:3000/api/cities?states=${
  //           router.query.cities
  //         }&page=${router.query.page ? router.query.page : 1}
  //         `
  //       )
  //         .then((res) => {
  //           return res.json();
  //         })
  //         .then((data) => {
  //           setSearchData(data);
  //           // console.log(data);
  //         });
  //     }
  //     if (router.query.cities && router.query.city) {
  //       fetch(
  //         `http://localhost:3000/api/cities?states=${
  //           router.query.cities
  //         }&city=${router.query.city}&page=${
  //           router.query.page ? router.query.page : 1
  //         }`
  //       )
  //         .then((res) => {
  //           return res.json();
  //         })
  //         .then((data) => {
  //           setSearchData(data);
  //         });
  //     }
  //   };
  //   search();
  // }, [router.query.cities, router.query.city]);

  // useEffect(() => {
  //   function name() {
  //     !router.query.page
  //       ? (router.query.page = 1)
  //       : (router.query.page = router.query.page);
  //   }
  //   name();
  // }, []);

  // function nextPage() {
  //   router.push(
  //     `/?cities=${router.query.cities}&page=${router.query.page * 1 + 1}`
  //   );
  // }

  // function prevPage() {
  //   router.push(
  //     `/?cities=${router.query.cities}&page=${router.query.page * 1 - 1}`
  //   );
  // }

  return (
    <>
      <div>Home</div>
      {/* <div className='px-5 md:px-10 lg:px-20 space-y-7'>
        <SearchMenu />
      </div> */}
      {/* <div>
        {searchData?.data?.length > 0 ? (
          <>
            <div className='px-5 md:px-10 lg:px-20 space-y-7 mb-11'>
              {searchData?.data?.map((element) => {
                return (
                  <>
                    <ListingCard detail={element} />
                  </>
                );
              })}
            </div>
            pagination
            <div className='flex justify-center pt-8'>
              <div className='flex gap-5'>
                <button
                  onClick={prevPage}
                  disabled={
                    router.query.page == "NaN" ||
                    router.query.page == "1" ||
                    (router.query &&
                      Object.keys(router.query).length === 0 &&
                      router.query.constructor === Object)
                      ? true
                      : false
                  }
                  className={
                    router.query.page == "NaN" ||
                    router.query.page == "1" ||
                    (router.query &&
                      Object.keys(router.query).length === 0 &&
                      router.query.constructor === Object)
                      ? "flex items-center cursor-not-allowed"
                      : "flex items-center border-2 rounded-lg border-blue-100 cursor-pointer px-2 p-2 bg-gray-200 gap-0 hover:border-black"
                  }
                >
                  <BiChevronLeft />
                  Prev
                </button>

                <div className='flex gap-2'>
                  {router.query.page != 1 && (
                    <button
                      className='border-2 p-1 px-3 rounded-lg'
                      onClick={() =>
                        router.push(`/?cities=${router.query.cities}&page=1`)
                      }
                    >
                      1
                    </button>
                  )}
                  {router.query.page > 2 && (
                    <button
                      className='border-2 p-1 px-3 rounded-lg'
                      disabled={router.query.page - 1 > 2}
                      onClick={() =>
                        router.push(
                          `/?cities=${router.query.cities}&page=${
                            router.query.page - 1
                          }`
                        )
                      }
                    >
                      {router.query.page - 1 > 2
                        ? "..."
                        : router.query.page - 1}
                    </button>
                  )}
                  {router.query.page > 3 && (
                    <button
                      className='border-2 p-1 px-3 rounded-lg'
                      onClick={() =>
                        router.push(
                          `/?cities=${router.query.cities}&page=${
                            router.query.page - 1
                          }`
                        )
                      }
                    >
                      {router.query.page - 1}
                    </button>
                  )}
                  {
                    <button className='border-2 p-1 px-3 rounded-lg bg-green-400'>
                      {router.query.page}
                    </button>
                  }
                  {router.query.page < searchData?.totalPages - 1 && (
                    <button
                      className='border-2 p-1 px-3 rounded-lg'
                      onClick={() =>
                        router.push(
                          `/?cities=${router.query.cities}&page=${
                            router.query.page * 1 + 1
                          }`
                        )
                      }
                    >
                      {router.query.page * 1 + 1}
                    </button>
                  )}
                  {router.query.page < searchData?.totalPages - 2 && (
                    <button
                      className='border-2 p-1 px-3 rounded-lg'
                      disabled={
                        router.query.page - 1 < searchData?.totalPages - 2
                      }
                      onClick={() =>
                        router.push(
                          `/?cities=${router.query.cities}&page=${
                            router.query.page - 1
                          }`
                        )
                      }
                    >
                      {router.query.page - 1 < searchData?.totalPages - 2
                        ? "..."
                        : router.query.page - 1}
                    </button>
                  )}
                  {router.query.page != searchData?.totalPages && (
                    <button
                      className='border-2 p-1 px-3 rounded-lg'
                      onClick={() =>
                        router.push(
                          `/?cities=${router.query.cities}&page=${searchData?.totalPages}`
                        )
                      }
                    >
                      {searchData?.totalPages}
                    </button>
                  )}
                </div>
                <button
                  onClick={nextPage}
                  disabled={
                    router.query.page == searchData?.totalPages ? true : false
                  }
                  className={
                    router.query.page == searchData?.totalPages
                      ? "flex items-center cursor-not-allowed"
                      : "flex items-center border-2 rounded-lg border-blue-100 cursor-pointer px-2 p-2 bg-gray-200 gap-0 hover:border-black"
                  }
                >
                  Next
                  <BiChevronRight />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='px-5 md:px-10 lg:px-20 space-y-7 mb-11'>
              {data?.map((element) => {
                return (
                  <>
                    <ListingCard detail={element} />
                  </>
                );
              })}
            </div>
            <div className='flex justify-center pt-8'>
              <Pagination />
            </div>
          </>
        )}
      </div> */}
    </>
  );
};

export default index;
