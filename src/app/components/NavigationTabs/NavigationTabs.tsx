import Button from '../Button/Button';
import './NavigationTabs.scss';

export interface NavigationTabOption {
    label: string;
    route: string;
}

interface NavigationTabsProps {
    options: NavigationTabOption[];
}

function NavigationTabs({ options }: NavigationTabsProps) {
    return (
        <div className="container-component-navigation-tabs">
            {options.map(option => {
                return (
                    <Button key={option.route} route={option.route}>
                        <span>{option.label}</span>
                    </Button>
                )
            })}
        </div>

    )
}

export default NavigationTabs