import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="list-projects">

                    {/* project 1 Amazon Clone */}
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                    }>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover' }}>Amazon Clone #1</CardTitle>
                        <CardText>
                            Building Amazon Clone project
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >

                    {/* project 2 Airbnb Clone */}
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                    }>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover' }}>Airbnb Clone #2</CardTitle>
                        <CardText>
                            Building Airbnb Clone project
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >

                    {/* project 2 Neftlix Clone */}
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png) center / cover' }}>Netflix Clone #3</CardTitle>
                        <CardText>
                            Building Netflix Clone project
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card >
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is NodeJs</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>NodeJs</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()} </div>
                        </Cell>
                    </Grid>
                </section>
            </div>

        )
    }
}

export default Projects;
