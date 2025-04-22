export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="text-2xl text-center">
        <h1 className="text-4xl font-bold">Loona</h1>
        <p className="text-sm text-gray-500">A simple and elegant note-taking app</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Welcome to Loona!</h2>
          <p className="mt-2 text-gray-600">Start taking notes today.</p>
        </div>
      </div>
      <footer className="text-sm text-gray-500">
        &copy; 2023 Loona. All rights reserved.
      </footer>
    </div>
  );
}
