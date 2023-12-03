import { Card, CardHeader, CardBody, CardFooter, Button } from '@wordpress/components';

const CardSettings = ({ children, handleSave, header }) => {
    return (
        <Card variant='primary'>
            <CardHeader>{header}</CardHeader>
            <CardBody>{children}</CardBody>
            <CardFooter>
                <Button
                    variant='primary'
                    onClick={handleSave}
                >
                    Save
                </Button>
            </CardFooter>
        </Card>
    )
}

export default CardSettings;