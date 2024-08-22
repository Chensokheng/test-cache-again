export const dynamicParams = true;
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="space-x-4">{children}</div>;
}
