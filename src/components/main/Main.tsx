"use client";

import { useDarkMode } from "@/context/DarkModeContext";
import { AgGridReact } from "ag-grid-react";
import React from "react";

export default function Main() {
  const { darkMode } = useDarkMode();

  const rowData = [
    {
      message: "🐛 에러 메세지 표시 수정",
      author: "kimguny",
      date: "2024-12-27T10:59:23Z",
    },
    {
      message: "🎨 사이드바 간격 조정",
      author: "kimguny",
      date: "2024-10-17T01:21:34Z",
    },
    {
      message: "🐛 로그인 만료시 alert 2번 나오는 버그 수정",
      author: "kimguny",
      date: "2024-10-17T01:21:27Z",
    },
  ];

  return (
    <>
      <div className={`${darkMode ? "dark" : ""} text-white w-full h-full`}>
        <div
          className={`${
            darkMode ? "ag-theme-alpine-dark" : "ag-theme-alpine"
          } w-full h-full`}
        >
          <div className="bg-red-500 text-white w-full p-4 rounded-lg mb-4">
            <p>
              현재 개발 중이라 오류가 있을 경우 관리자에게 문의해주세요.
              <br />
              <span className="font-semibold">Discode ID:</span> kimgeon9445
            </p>
          </div>
          <AgGridReact
            rowData={rowData}
            columnDefs={[
              {
                headerName: "Commit Message",
                field: "message",
                flex: 1,
              },
              {
                headerName: "Author",
                field: "author",
                flex: 1,
              },
              {
                headerName: "Date",
                field: "date",
                flex: 1,
                cellRenderer: (params: any) => {
                  const date = new Date(params.value);
                  return date.toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  });
                },
              },
            ]}
            pagination={true}
            paginationPageSize={5}
          />
        </div>
      </div>
    </>
  );
}
