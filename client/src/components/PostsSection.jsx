import React from "react";
import { CircularProgress } from "@mui/material";
import SearchBar from "./SearchBar";
import ImageCard from "./ImageCard";

const PostsSection = ({ search, setSearch, loading, filteredPosts }) => {
  return (
    <div>

      {/* 🔍 SEARCH */}
      <div className="flex justify-center px-4 mt-20 mb-8">
        <div className="w-full max-w-[800px]">
          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </div>

      {/* 📸 POSTS */}
      <div className="px-4 pb-16 flex justify-center">
        <div className="w-full max-w-[1200px]">

          {loading ? (
            <div className="flex justify-center py-20">
              <CircularProgress sx={{ color: "white" }} />
            </div>
          ) : filteredPosts.length === 0 ? (
            <p className="text-gray-400 text-center py-20 text-lg">
              No posts found
            </p>
          ) : (
            <>
              {/* Optional Heading */}
              <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                Explore Creations 🔥
              </h2>

              <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
                {filteredPosts
                  .slice()
                  .reverse()
                  .map((item, index) => (
                    <ImageCard key={index} item={item} />
                  ))}
              </div>
            </>
          )}

        </div>
      </div>

    </div>
  );
};

export default PostsSection;