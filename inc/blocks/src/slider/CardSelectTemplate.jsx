import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ToggleControl,
    RangeControl,
    Button
} from '@wordpress/components';
import { useState } from "@wordpress/element";

export const CardSelectTemplate = ({ handleSave }) => {
    const [teamplate, setTeamplate] = useState(null)
    const [count, setCount] = useState(0)

    return (
        <Card>
            <CardHeader>Choose a template</CardHeader>
            <CardBody>
                <ToggleControl
                    label="Template with images"
                    checked={teamplate === 'images'}
                    onChange={() => setTeamplate('images')}
                />
                <ToggleControl
                    label="Template with pages"
                    checked={teamplate === 'pages'}
                    onChange={() => setTeamplate('pages')}
                />
                <ToggleControl
                    label="Template with products"
                    checked={
                        teamplate === 'products'
                        | teamplate === 'individual'
                        | teamplate === 'multiple'
                    }
                    onChange={() => setTeamplate('products')}
                />
                {(teamplate === 'products' || teamplate === 'individual' || teamplate === 'multiple') && (
                    <div className='wp-block-glimp-slider__card-second'>
                        <ToggleControl
                            label="Individual product cards"
                            checked={teamplate === 'individual'}
                            onChange={() => setTeamplate('individual')}
                        />
                        <ToggleControl
                            label="Multiple selection of cards"
                            checked={teamplate === 'multiple'}
                            onChange={() => {
                                setTeamplate('multiple')
                                setCount(1)
                            }}
                        />
                    </div>
                )}
                <ToggleControl
                    label="Blank template"
                    checked={teamplate === 'blank'}
                    onChange={() => setTeamplate('blank')}
                />
                {teamplate !== 'multiple' && (
                    <RangeControl
                        label="Number of cards"
                        value={count}
                        onChange={(value) => setCount(value)}
                        min={0}
                        max={25}
                        step={1}
                        marks={true}
                    />
                )}
            </CardBody>
            <CardFooter>
                <Button
                    variant='primary'
                    onClick={() => handleSave({ block: teamplate, count })}
                >
                    Save
                </Button>
            </CardFooter>
        </Card>
    )
}
