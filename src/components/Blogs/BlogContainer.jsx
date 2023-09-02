/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { getBlogById } from "../../handleApi/documentApi";
import { useLocation } from "react-router-dom";
import parser from "html-react-parser";

const BlogContainer = () => {
  const { state } = useLocation();
  const id = state?.id;
  const [blog, setBlog] = useState({});

  const getBlog = async () => {
    try {
      const { data } = await getBlogById(id);
      setBlog(data.data);
    } catch (error) {
      console.log("The error for Blog Container ", error);
    }
  };

  useEffect(() => {
    getBlog();
  }, [id]);

  return (
    <div className="prose py-5 bg-white h-auto rounded-md p-5 mt-10 min-w-full">
      {parser(String(blog?.notes))}
    </div>
  );
};

export default BlogContainer;
