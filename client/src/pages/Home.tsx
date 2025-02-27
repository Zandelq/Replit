import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="grid gap-6">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Working Links</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Access your favorite proxy services securely and efficiently. Choose from our selection of trusted unblockers below.
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Ultraviolet</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Fast and reliable web proxy service.</p>
            <Link href="/ultraviolet">
              <Button className="w-full">Access Ultraviolet</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Doge Unblocker</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Popular and user-friendly proxy solution.</p>
            <Link href="/doge-unblocker">
              <Button className="w-full">Access Doge Unblocker</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Holy Unblocker</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Secure and private browsing experience.</p>
            <Link href="/holy-unblocker">
              <Button className="w-full">Access Holy Unblocker</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Net Shield</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Advanced proxy protection service.</p>
            <Link href="/net-shield">
              <Button className="w-full">Access Net Shield</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
