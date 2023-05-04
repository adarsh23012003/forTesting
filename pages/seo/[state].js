import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ListingCard from "../../components/ListingCard";
import SearchMenu from "../../components/Search";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function state() {
  const router = useRouter();
  const [byStateData, setByStateData] = useState([]);

  console.log(router);
  // In search data fetching
  useEffect(() => {
    const byStateSearch = function () {
      if (router.query.state) {
        fetch(
          `http://localhost:3000/api/cities?states=${router.query.state}&page=${
            router.query.page ? router.query.page : 1
          }`
        )
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            setByStateData(data);
            // console.log(data);
          });
      }
      //   if (router.query.state && router.query.city) {
      //     fetch(
      //       `http://localhost:3000/api/cities?states=${
      //         router.query.cities
      //       }&city=${router.query.city}&page=${
      //         router.query.page ? router.query.page : 1
      //       }`
      //     )
      //       .then((res) => {
      //         return res.json();
      //       })
      //       .then((data) => {
      //         setbyStateData(data);
      //       });
      //   }
    };
    byStateSearch();
  }, [router.query.state, router.query.page]);

  useEffect(() => {
    function spaceRemovingFor() {
      !router.query.page
        ? (router.query.page = 1)
        : (router.query.page = router.query.page);
    }
    spaceRemovingFor();
  }, []);

  function nextPage() {
    router.push(`/seo/${router.query.state}?page=${router.query.page * 1 + 1}`);
  }

  function prevPage() {
    router.push(`/seo/${router.query.state}?page=${router.query.page * 1 - 1}`);
  }
  return (
    <>
      {/* BreadCumb */}
      <div className='flex gap-0'>
        <button
          onClick={() => {
            router.push("/");
          }}
        >{`Home >`}</button>
        <button
          onClick={() => {
            router.push(`/${router.route.trim().split("/")[1]}`);
          }}
        >
          {router.route.trim().split("/")[1]}
        </button>
        <button
          onClick={() => {
            router.push(`/${router.query.state}`);
          }}
        >
          {`>${router.query.state}`}
        </button>
      </div>
      <div className='px-5 md:px-10 lg:px-20 space-y-7'>
        <SearchMenu />
      </div>
      <div>
        {byStateData?.data?.map((element) => {
          return (
            <>
              <div>
                <ListingCard detail={element} />
              </div>
            </>
          );
        })}
      </div>
      {/* pagination */}
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
                onClick={() => router.push(`/seo/${router.query.state}?page=1`)}
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
                    `/seo/${router.query.state}?page=${router.query.page - 1}`
                  )
                }
              >
                {router.query.page - 1 > 2 ? "..." : router.query.page - 1}
              </button>
            )}
            {router.query.page > 3 && (
              <button
                className='border-2 p-1 px-3 rounded-lg'
                onClick={() =>
                  router.push(
                    `/seo/${router.query.state}?page=${router.query.page - 1}`
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
            {router.query.page < byStateData?.totalPages - 1 && (
              <button
                className='border-2 p-1 px-3 rounded-lg'
                onClick={() =>
                  router.push(
                    `/seo/${router.query.state}?page=${
                      router.query.page * 1 + 1
                    }`
                  )
                }
              >
                {router.query.page * 1 + 1}
              </button>
            )}
            {router.query.page < byStateData?.totalPages - 2 && (
              <button
                className='border-2 p-1 px-3 rounded-lg'
                disabled={router.query.page - 1 < byStateData?.totalPages - 2}
                onClick={() =>
                  router.push(
                    `/seo/${router.query.state}?page=${router.query.page - 1}`
                  )
                }
              >
                {router.query.page - 1 < byStateData?.totalPages - 2
                  ? "..."
                  : router.query.page - 1}
              </button>
            )}
            {router.query.page != byStateData?.totalPages && (
              <button
                className='border-2 p-1 px-3 rounded-lg'
                onClick={() =>
                  router.push(
                    `/seo/${router.query.state}?page=${byStateData?.totalPages}`
                  )
                }
              >
                {byStateData?.totalPages}
              </button>
            )}
          </div>
          <button
            onClick={nextPage}
            disabled={
              router.query.page == byStateData?.totalPages ? true : false
            }
            className={
              router.query.page == byStateData?.totalPages
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
  );
}

export default state;
