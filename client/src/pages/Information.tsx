import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Information() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Information</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>About Our Services</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Welcome to Working Links, your trusted source for web proxy services. Our platform provides access to multiple proxy solutions to help you browse the internet securely and privately.
          </p>
          <p>
            We offer several reliable proxy services including Ultraviolet, Doge Unblocker, Holy Unblocker, and Net Shield. Each service is carefully maintained and updated to ensure the best possible experience.
          </p>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>How to Use</CardTitle>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Choose your preferred proxy service from the navigation menu</li>
            <li>Enter the URL you want to visit in the provided input field</li>
            <li>Click the access button to begin browsing through the proxy</li>
            <li>Enjoy secure and private browsing</li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Privacy & Security</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Our proxy services are designed with your privacy and security in mind. We do not store any personal information or browsing history. All connections are encrypted to protect your data.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
