/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Q1Acw3tIF9h
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Component() {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8">
      <h1 className="text-2xl font-bold mb-6">Dog Walking Schedule</h1>
      <div className="grid grid-cols-7 gap-4">
        <div className="col-span-1 font-medium">Monday</div>
        <div className="col-span-1 font-medium">Tuesday</div>
        <div className="col-span-1 font-medium">Wednesday</div>
        <div className="col-span-1 font-medium">Thursday</div>
        <div className="col-span-1 font-medium">Friday</div>
        <div className="col-span-1 font-medium">Saturday</div>
        <div className="col-span-1 font-medium">Sunday</div>
        <div className="col-span-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Buddy</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-1">9:00 AM</p>
          <p className="text-gray-500 dark:text-gray-400">Take Buddy to the park for 30 minutes</p>
        </div>
        <div className="col-span-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Daisy</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-1">2:00 PM</p>
          <p className="text-gray-500 dark:text-gray-400">Daisy needs to be on a leash</p>
        </div>
        <div className="col-span-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Max</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-1">10:30 AM</p>
          <p className="text-gray-500 dark:text-gray-400">Max loves to chase squirrels</p>
        </div>
        <div className="col-span-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Bella</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-1">4:00 PM</p>
          <p className="text-gray-500 dark:text-gray-400">Bella is afraid of loud noises</p>
        </div>
        <div className="col-span-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Charlie</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-1">11:00 AM</p>
          <p className="text-gray-500 dark:text-gray-400">Charlie needs to be brushed after the walk</p>
        </div>
        <div className="col-span-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Lola</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-1">1:30 PM</p>
          <p className="text-gray-500 dark:text-gray-400">Lola loves to play fetch</p>
        </div>
        <div className="col-span-1 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-medium mb-2">Milo</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-1">3:00 PM</p>
          <p className="text-gray-500 dark:text-gray-400">Milo is a senior dog, take it slow</p>
        </div>
      </div>
    </div>
  )
}
