import React, { useEffect, useState } from "react";
import SearchMenu from "../../components/Search";
import { useRouter } from "next/router";
import ListingCard from "../../components/ListingCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function index() {
  const [data, setData] = useState([]);
  const router = useRouter();
  useEffect(() => {
    function defaultData() {
      fetch(
        `http://localhost:3000/api/staticdata?page=${
          router.query.page ? router.query.page : 1
        }`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);
        });
    }
    defaultData();
  }, [router.query.page]);

  function nextPage() {
    router.push(
      `http://localhost:3000?page=${
        router.query.page ? router.query.page * 1 + 1 : 2
      }`
    );
  }

  function prevPage() {
    router.push(`http://localhost:3000?page=${router.query.page * 1 - 1}`);
  }
  useEffect(() => {
    function name() {
      !router.query.page
        ? (router.query.page = 1)
        : (router.query.page = router.query.page);
    }
    name();
  }, []);
  return (
    <>
      <div className='px-5 md:px-10 lg:px-20 space-y-7'>
        <SearchMenu />
      </div>
      <div>
        <div className='px-5 md:px-10 lg:px-20 space-y-7 mb-11'>
          {data?.data?.map((element) => {
            return (
              <>
                <ListingCard detail={element} />
              </>
            );
          })}
        </div>
        <div className='flex justify-center pt-8'>
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
                    onClick={() => router.push(`/seo?page=1`)}
                  >
                    1
                  </button>
                )}
                {router.query.page > 2 && (
                  <button
                    className='border-2 p-1 px-3 rounded-lg'
                    disabled={router.query.page - 1 > 2}
                    onClick={() =>
                      router.push(`/seo?page=${router.query.page - 1}`)
                    }
                  >
                    {router.query.page - 1 > 2 ? "..." : router.query.page - 1}
                  </button>
                )}
                {router.query.page > 3 && (
                  <button
                    className='border-2 p-1 px-3 rounded-lg'
                    onClick={() =>
                      router.push(`/seo?page=${router.query.page - 1}`)
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
                {router.query.page < data?.totalPages - 1 && (
                  <button
                    className='border-2 p-1 px-3 rounded-lg'
                    onClick={() =>
                      router.push(`/seo?page=${router.query.page * 1 + 1}`)
                    }
                  >
                    {router.query.page * 1 + 1}
                  </button>
                )}
                {router.query.page < data?.totalPages - 2 && (
                  <button
                    className='border-2 p-1 px-3 rounded-lg'
                    disabled={router.query.page - 1 < data?.totalPages - 2}
                    onClick={() =>
                      router.push(`/seo?page=${router.query.page - 1}`)
                    }
                  >
                    {router.query.page - 1 < data?.totalPages - 2
                      ? "..."
                      : router.query.page - 1}
                  </button>
                )}
                {router.query.page != data?.totalPages && (
                  <button
                    className='border-2 p-1 px-3 rounded-lg'
                    onClick={() => router.push(`/seo?page=${data?.totalPages}`)}
                  >
                    {data?.totalPages}
                  </button>
                )}
              </div>
              <button
                onClick={nextPage}
                disabled={router.query.page == data?.totalPages ? true : false}
                className={
                  router.query.page == data?.totalPages
                    ? "flex items-center cursor-not-allowed"
                    : "flex items-center border-2 rounded-lg border-blue-100 cursor-pointer px-2 p-2 bg-gray-200 gap-0 hover:border-black"
                }
              >
                Next
                <BiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
