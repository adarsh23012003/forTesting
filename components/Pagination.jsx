import { useRouter } from "next/router";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Pagination = () => {
  const router = useRouter();
  const { page, limit } = router.query;

  function nextPage() {
    router.push(
      `http://localhost:3000?page=${page ? page * 1 + 1 : 2}&limit=${
        limit ? limit * 1 : 5
      }`
    );
  }

  function prevPage() {
    router.push(
      `http://localhost:3000?page=${page * 1 - 1}&limit=${
        limit ? limit * 1 : 5
      }`
    );
  }

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
        <button
          onClick={() => {
            router.push("http://localhost:3000?page=1&limit=5");
          }}
          className='border-2 p-1 px-3 rounded-lg'
        >
          1
        </button>
        <button
          onClick={() => {
            router.push("http://localhost:3000?page=2&limit=5");
          }}
          className='border-2 p-1 px-3 rounded-lg'
        >
          2
        </button>
        <button
          onClick={() => {
            router.push("http://localhost:3000?page=3&limit=5");
          }}
          className='border-2 p-1 px-3 rounded-lg'
        >
          3
        </button>
        <button
          onClick={nextPage}
          className='flex items-center border-2 rounded-lg border-blue-100 cursor-pointer px-2 p-2 bg-green-500 text-white gap-0 hover:border-black'
        >
          Next
          <BiChevronRight />
        </button>
      </div>
    </>
  );
};

export default Pagination;
