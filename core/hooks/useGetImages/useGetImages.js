import React, { useState, useEffect } from "react";

/**
 *
 * @param {Array} directory  public/assets folder
 * @returns
 */

export default function useGetImages(directory) {
  const [loading, setLoading] = useState(true);
  const [filesInfo, setFilesInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const filesArray = [];
      const callApi = async (folder) => {
        const bodyRequest = {
          dir: `assets/${folder}`,
        };

        const res = await fetch("/api/readFiles", {
          method: "POST",
          body: JSON.stringify(bodyRequest),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        try {
          const allFiles = await res.json();

          for (const f of allFiles) {
            const i = await import(`/public/assets/${folder}${f}`);
            filesArray.push(i.default);
          }
        } catch (error) {
          console.log(error);
        }
      };

      for (const folder of directory) {
        await callApi(folder);
      }
      setTimeout(() => {
        setFilesInfo(filesArray);

        setLoading(false);
      }, 600);
    };
    fetchData();
  }, []);

  return [filesInfo, loading];
}
