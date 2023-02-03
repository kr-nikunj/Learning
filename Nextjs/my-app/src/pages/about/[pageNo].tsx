import { useRouter } from "next/router";

const PageNo = () => {

    const router = useRouter();
    const pageNumber = router.query.pageNo;

  return (
        <>
            <h1>My {pageNumber} Content showing here</h1>
        </>
    );
};

export default PageNo;