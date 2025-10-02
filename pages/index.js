import supabase from "../supabaseClient";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">
                🚀 Welcome to My First Next.js + Tailwind Page!
            </h1>
            <p className="text-lg text-gray-700 mb-6">
                Edit this text in <code>pages/index.js</code> to make it yours.
                I have now done that.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Click Me! Or not.
            </button>
            <p className="text-lg text-gray-700 mb-6">
                Hi, this is a website created for the codebox boot camp. I&apos;m Joshua Y, a fun fact about me is that I&apos;ve played the piano for 12 years
            </p>
            <input name="information" type="text" id="info" class="searchField"/>
            <p/>
            <button onClick={test}>Submit information</button>
        </main>
    );
}

async function test(){
    var info = document.getElementById('info').value
    console.log(info)
    const { error } = await supabase
  .from('information')
  .insert({ id: 1, string: info })
}