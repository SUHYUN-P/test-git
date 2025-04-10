// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-800 p-4">
      {/* 메인/헤더 섹션 */}
      <section className="py-20 mx-4 my-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-3xl shadow-lg">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* 프로필 이미지 */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="rounded-full w-48 h-48 mx-auto border-4 border-white shadow-lg object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
          {/* 텍스트 내용 */}
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 text-white">박수현</h1>
            <p className="text-xl mb-6 text-white">프론트엔드 개발자</p>
            <p className="text-lg text-white/90">안녕하세요, 열정적인 웹 개발자입니다.</p>
          </div>
        </div>
      </section>

      {/* About 섹션 */}
      <section className="py-16 px-8 mx-4 my-8 bg-blue-50 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">About Me</h2>
        <div className="space-y-4 text-gray-600">
          <p>저는 사용자 경험을 중요시하는 프론트엔드 개발자입니다.</p>
          <p>Next.js, React, TypeScript 등의 최신 기술을 활용하여 웹 개발을 하고 있습니다.</p>
        </div>
      </section>

      {/* Skills 섹션 */}
      <section className="py-16 px-8 mx-4 my-8 bg-purple-50 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="font-bold mb-4 text-blue-500 text-xl">Frontend</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-500 transition-colors">HTML5</li>
              <li className="hover:text-blue-500 transition-colors">CSS3</li>
              <li className="hover:text-blue-500 transition-colors">JavaScript</li>
              <li className="hover:text-blue-500 transition-colors">React</li>
              <li className="hover:text-blue-500 transition-colors">Next.js</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="font-bold mb-4 text-blue-500 text-xl">Backend</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-500 transition-colors">Node.js</li>
              <li className="hover:text-blue-500 transition-colors">Express</li>
              <li className="hover:text-blue-500 transition-colors">MySQL</li>
            </ul>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="font-bold mb-4 text-blue-500 text-xl">Tools</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-500 transition-colors">Git</li>
              <li className="hover:text-blue-500 transition-colors">VS Code</li>
              <li className="hover:text-blue-500 transition-colors">Figma</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section className="py-16 px-8 mx-4 my-8 bg-pink-50 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-4 text-blue-500">프로젝트 1</h3>
            <p className="text-gray-600">프로젝트 설명이 들어갈 자리입니다.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
            <h3 className="text-xl font-bold mb-4 text-blue-500">프로젝트 2</h3>
            <p className="text-gray-600">프로젝트 설명이 들어갈 자리입니다.</p>
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section className="py-16 px-8 mx-4 my-8 bg-green-50 rounded-3xl shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-blue-600">Contact</h2>
        <div className="space-y-4 text-gray-600">
          <p className="hover:text-blue-500 transition-colors">Email: your.email@example.com</p>
          <p className="hover:text-blue-500 transition-colors">GitHub: github.com/yourusername</p>
        </div>
      </section>
    </main>
  );
}