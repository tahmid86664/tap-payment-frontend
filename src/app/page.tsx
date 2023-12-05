import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center space-between p-24">
      <div className="mb-40 flex flex-col items-center justify-between w-full h-28">
        <div>If the club is in Middle East like Kuwait</div>
        <div>
          <Link className="bg-black text-white p-4" href={"/tap"}>
            Tap Payment
          </Link>
        </div>
      </div>
      <div className="mb-40 flex flex-col items-center justify-between w-full h-28 ">
        <div>If the club is not in Middle East</div>
        <div>
          <Link className="bg-black text-white p-4" href={"/stripe"}>
            Stripe Payment (Existing Payment)
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between w-full h-28 ">
        <div>TAP Business Account (For Our Clubs)</div>
        <div>
          <Link
            className="bg-black text-white p-4"
            href={"/tap-business-account"}
          >
            Create a business account
          </Link>
        </div>
      </div>
    </main>
  );
}
