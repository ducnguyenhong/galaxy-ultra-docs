export const CARD_CODE_SANDBOX_NORMAL = 'https://codesandbox.io/s/galaxy-ultra-card-kxd32';
export const CARD_CODE_SANDBOX_SIZE = 'https://codesandbox.io/s/galaxy-ultra-card-yln1s';
export const CARD_CODE_SANDBOX_IMAGE_POSITION = 'https://codesandbox.io/s/galaxy-ultra-card-wfdmx';
export const CARD_CODE_SANDBOX_IMAGE_RATIO = 'https://codesandbox.io/s/galaxy-ultra-card-9fedy';

export const CARD_CODE_IMPORT = `import Card from "@galaxy-ultra/card"`;

export const CARD_CODE_DEMO_NORMAL = `<Card title="Card title">
    <p className="text-gray-600 text-sm text-justify">Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</Card>
`;

export const CARD_CODE_DEMO_SIZE = `<Card title="SMALL size" size="small">
    <p className="text-gray-600 text-sm text-justify">Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</Card>

<Card title="NORMAL size" size="normal">
    <p className="text-gray-600 text-sm text-justify">Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</Card>

<Card title="LARGE size" size="large">
    <p className="text-gray-600 text-sm text-justify">Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</Card>

<Card title="FULL size" size="full">
    <p className="text-gray-600 text-sm text-justify">Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</Card>
`;

export const CARD_CODE_DEMO_IMAGE_POSITION = `<Card title="Card with top image"
        image={{
        src: "https://nhduc.net/assets/common/img-preview.png",
        position: "top"
    }}
>
    <p className="text-gray-600 text-sm text-justify">Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</Card>

<Card title="Card with bottom image"
        image={{
        src: "https://nhduc.net/assets/common/img-preview.png",
        position: "bottom"
    }}
>
    <p className="text-gray-600 text-sm text-justify">Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</Card>
`;

export const CARD_CODE_DEMO_IMAGE_RATIO = `<Card
    title="Card with ratio 16/9 image"
    size="small"
    image={{
        src: "https://nhduc.net/assets/common/img-preview.png",
        ratio: "16/9"
    }}
>
    <p className="text-gray-600 text-sm text-justify">Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</Card>

<Card
    title="Card with ratio auto image"
    size="small"
    image={{
        src: "https://nhduc.net/assets/common/img-preview.png",
        ratio: "auto"
    }}
>
    <p className="text-gray-600 text-sm text-justify">Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</Card>

<Card
    title="Card with ratio 1/1 image"
    size="small"
    image={{
        src: "https://nhduc.net/assets/common/img-preview.png",
        ratio: "1/1"
    }}
>
    <p className="text-gray-600 text-sm text-justify">Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</Card>
`;
