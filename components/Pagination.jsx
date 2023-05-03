import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Pagination = () => {
  const router = useRouter();

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
              onClick={() => router.push("/?page=1")}
            >
              1
            </button>
          )}
          {router.query.page > 2 && (
            <button
              className='border-2 p-1 px-3 rounded-lg'
              disabled={router.query.page - 1 > 2}
              onClick={() => router.push(`/?page=${router.query.page - 1}`)}
            >
              {router.query.page - 1 > 2 ? "..." : router.query.page - 1}
            </button>
          )}
          {router.query.page > 3 && (
            <button
              className='border-2 p-1 px-3 rounded-lg'
              onClick={() => router.push(`/?page=${router.query.page - 1}`)}
            >
              {router.query.page - 1}
            </button>
          )}
          {
            <button className='border-2 p-1 px-3 rounded-lg bg-green-400'>
              {router.query.page}
            </button>
          }
          {router.query.page < 784 - 1 && (
            <button
              className='border-2 p-1 px-3 rounded-lg'
              onClick={() => router.push(`/?page=${router.query.page * 1 + 1}`)}
            >
              {router.query.page * 1 + 1}
            </button>
          )}
          {router.query.page < 784 - 2 && (
            <button
              className='border-2 p-1 px-3 rounded-lg'
              disabled={router.query.page - 1 < 784 - 2}
              onClick={() => router.push(`/?page=${router.query.page - 1}`)}
            >
              {router.query.page - 1 < 784 - 2 ? "..." : router.query.page - 1}
            </button>
          )}
          {router.query.page != 784 && (
            <button
              className='border-2 p-1 px-3 rounded-lg'
              onClick={() => router.push("/?page=784")}
            >
              784
            </button>
          )}
        </div>
        <button
          onClick={nextPage}
          disabled={router.query.page == 784 ? true : false}
          className={
            router.query.page == 784
              ? "flex items-center cursor-not-allowed"
              : "flex items-center border-2 rounded-lg border-blue-100 cursor-pointer px-2 p-2 bg-gray-200 gap-0 hover:border-black"
          }
        >
          Next
          <BiChevronRight />
        </button>
      </div>
    </>
  );
};

export default Pagination;
