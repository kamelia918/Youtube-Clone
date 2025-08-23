// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API_KEY = "AIzaSyCJqHTkHmOb1i4ljuB7iVa6N4zydKdo678";
// const BASE_URL = "https://www.googleapis.com/youtube/v3";

// // Fetch popular videos
// export const fetchPopularVideos = async () => {
//   try {
//     const response = await axios.get(`${BASE_URL}/videos`, {
//       params: {
//         part: "snippet,statistics",
//         chart: "mostPopular",
//         maxResults: 12,
//         regionCode: "US",
//         key: API_KEY,
//       },
//     });
//     return response.data.items;
//   } catch (error) {
//     console.error("Error fetching YouTube videos:", error);
//     return [];
//   }
// };

// // Component
// export default function VideoGrid() {
//   const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     const loadVideos = async () => {
//       const data = await fetchPopularVideos();
//       setVideos(data);
//     };
//     loadVideos();
//   }, []);

//   return (
//     <div className="border-8 border-red-400 flex flex-wrap gap-4 p-4">
//       {videos.map((video) => (
//         <div key={video.id} className="flex flex-col w-64">
//           {/* Thumbnail */}
//           <div className="relative pb-[56.25%]">
//             <img
//               src={video.snippet.thumbnails.medium.url}
//               alt={video.snippet.title}
//               className="absolute inset-0 w-full h-full object-cover rounded-lg"
//             />
//           </div>

//           {/* Details */}
//           <div className="mt-2">
//             <h3 className="font-medium line-clamp-2">
//               {video.snippet.title}
//             </h3>
//             <p className="text-sm text-gray-600 mt-1">
//               {video.snippet.channelTitle}
//             </p>
//             <div className="text-sm text-gray-600">
//               <span>{video.statistics?.viewCount} views</span>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
