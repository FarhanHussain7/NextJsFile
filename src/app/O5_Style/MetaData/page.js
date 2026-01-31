export default function Metadatapage() {
    return(
        <div>
            <h1 className="text-4xl font-['Roboto']">Metadata Page</h1>
        </div>
    )
}

export function generateMetadata() {
    return {
        title: 'Custom Metadata Title',
        description: 'This is a custom description for the Metadata Page.',
    };
}