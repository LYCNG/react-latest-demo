const Error500 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[720px] text-center">
      <h1 className="text-4xl font-bold text-error">
        500 - 資料不存在或伺服器錯誤
      </h1>
      <p className="mt-2 text-gray-600">無法找到您要查看的內容，請返回首頁。</p>
      <a href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        返回首頁
      </a>
    </div>
  );
};

export default Error500;
