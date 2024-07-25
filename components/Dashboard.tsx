import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "./ui/separator"

export function Dashboard() {
  return (
    <div className="w-full h-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex flex-col items-center justify-between pt-10 lg:pt-10 px-4 lg:px-0">
        <div className="mx-auto grid w-full max-w-md md:px-5 lg:px-10 lg:py-10 gap-6">
          <div className="grid gap-2 text-center lg:text-left">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email and password to sign in!
            </p>
            <Button type="submit" className="w-full mt-2" variant="outline">
              <GoogleIcon className="h-6 w-6 pr-1" />{" "}Sign In with Google
            </Button>
          </div>
          <Separator />
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="grid gap-2 mt-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <Button type="submit" className="w-full mt-1">
              Sign In
            </Button>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <Link href='#'>Forgot your password?</Link>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <Link href="#">
              Don&apos;t have an account?{" "}Sign up
            </Link>
          </div>
          <footer className="flex justify-between text-sm text-muted-foreground w-full">
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms &amp; Conditions</p>
          <p>Refund Policy</p>
        </footer>
        </div>
        
        
      </div>
      <div className="hidden lg:flex lg:flex-col lg:justify-center lg:items-center bg-muted lg:block container lg:px-20">
        <div><h1 className="text-5xl font-bold">Horizon AI</h1></div>
        <div><p className="pt-20 font-bold text-center">"This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before."</p></div>
        <div><p className="pt-5 text-sm text-muted-foreground">Sofia Davis - CTO Horizon AI</p></div>
      </div>
    </div>
  )
}

function GoogleIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px">
      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
  )
}
