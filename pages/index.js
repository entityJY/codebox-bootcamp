import supabase from "../supabaseClient";
import Wave from 'react-wavify'

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
            <p/>
                Previous 5 messages:
            <p/>
            <p id="first.message"> Empty </p>
            <p id="second.message"> Empty </p>
            <p id="third.message"> Empty </p>
            <p id="fourth.message"> Empty </p>
            <p id="fifth.message"> Empty </p>
            <Wave 
                fill='#34b2f0ff'
                paused={false}
                style={{ display: 'flex' }}
                options={{
                    height: 50,
                    amplitude: 20,
                    speed: 0.3,
                    points: 9
                }}
            />
        </main>
    );
}

async function get_recent_messages() {
    const { data, error } = await supabase
        .from('information')
        .select("*")
        .order('id', { ascending: false})
        .limit(5)
    console.log(data[0].string)
    document.getElementById("first.message").setAttribute("value", data[0].string)
    document.getElementById("second.message").setAttribute("value", data[1].string)
    document.getElementById("third.message").setAttribute("value", data[2].string)
    document.getElementById("fourth.message").setAttribute("value", data[3].string)
    document.getElementById("fifth.message").setAttribute("value", data[4].string)
}

async function test(){
    var info = document.getElementById('info')
    const { data, count } = supabase
        .from('information')
        .select('*', { count: 'exact', head: true })
    const { error } = await supabase
        .from('information')
        .insert({ id: count, string: info.value })
    info.setAttribute("value", "")
    get_recent_messages()
}