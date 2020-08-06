import styled from "styled-components";
import React from "react";
import UserNavigationBar from "@views-client/layout/UserNavigationBar";
import renderRoutes from "@router/routingGuard";

/**
 * 客户端布局
 */
const UserLayout = (props) => {

    const {route} = props;
    return (
        <Container>
            {/*<Header fixed={false} showCity={false}/>*/}
            <UserNavigationBar/>
            <div className="content-container">
                {renderRoutes(route.routes)}
            </div>
        </Container>
    )
};
const Container = styled.div`
    width: 100%;
    position: absolute;
    background: #FFFFFF;
    color: rgba(0,0,0,.6);
    font-size: 14px;
    min-height: 100%;
    padding-left: calc(100vw - 100%);
    .content-container{
        width: 1200px;
        margin: 100px auto 0;
        font-size: 14px;
        line-height: 180%;
    }
    .side-left{
        float: left;
        width: 200px;
        padding: 20px 0;
        border: solid 1px #eee;
        .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
            border-right: 0px solid #f0f0f0; 
        }
    }
    .side-right{
        float: right;
        position: relative;
        width: 980px;
        min-height: 500px;
        border: solid 1px #eee;
        padding: 15px 30px 0;
    }
    .ant-menu-horizontal{
        border-bottom: 0px;
    }
`;

export default UserLayout;
