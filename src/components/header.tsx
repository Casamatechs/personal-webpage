export default function Header() {
  return (
    <div>
      <h1 className="text-3xl sm:text-5xl font-bold text-center">Carlos Sanchez</h1>
      <hr className="m-auto w-20 h-1 my-2 bg-gray-200 border-0 dark:bg-gray-700 rounded" />
      <p className="flex justify-center text-center text-lg sm:text-xl">
        Fullstack Engineer @&nbsp;
        <a
          className="hover:underline text-blue-600 hover:text-blue-800"
          href="https://www.onomaai.com"
        >
          Onoma.ai
        </a>
      </p>
    </div>
  );
}
