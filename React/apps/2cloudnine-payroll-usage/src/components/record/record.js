import React from "react";

import Button from "@salesforce/design-system-react/components/button";
import ButtonGroup from "@salesforce/design-system-react/components/button-group";
import ButtonStateful from "@salesforce/design-system-react/components/button-stateful";
import Dropdown from "@salesforce/design-system-react/components/menu-dropdown";
import Icon from "@salesforce/design-system-react/components/icon";
import IconSettings from "@salesforce/design-system-react/components/icon-settings";
import PageHeader from "@salesforce/design-system-react/components/page-header";
import PageHeaderControl from "@salesforce/design-system-react/components/page-header/control";

class Example extends React.Component {
  static displayName = "RecordHomePageHeaderExample";

  render() {
    const actions = () => (
      <React.Fragment>
        <PageHeaderControl>
          <ButtonStateful
            key="PageHeaderFollowButton"
            iconSize="medium"
            stateOne={{ iconName: "add", label: "Follow" }}
            stateTwo={{ iconName: "check", label: "Following" }}
            stateThree={{ iconName: "close", label: "Unfollow" }}
          />
        </PageHeaderControl>
        <PageHeaderControl>
          <ButtonGroup variant="list" id="button-group-page-header-actions">
            <Button label="Edit" />
            <Button label="Delete" />
            <Button label="Clone" />
            <Dropdown
              align="right"
              assistiveText={{ icon: "More Options" }}
              iconCategory="utility"
              iconName="down"
              iconVariant="border-filled"
              id="dropdown-record-home-example"
              options={[
                { label: "Menu Item One", value: "A0" },
                { label: "Menu Item Two", value: "B0" },
                { label: "Menu Item Three", value: "C0" },
                { type: "divider" },
                { label: "Menu Item Four", value: "D0" }
              ]}
            />
          </ButtonGroup>
        </PageHeaderControl>
      </React.Fragment>
    );

    const details = [
      {
        label: "Field 1",
        content:
          "Description that demonstrates truncation with content. Description that demonstrates truncation with content.",
        truncate: true
      },
      { label: "Field 2", content: "Multiple Values" },
      {
        label: "Field 3",
        content: <a href="javascript:void(0);">Hyperlink</a>
      },
      {
        label: "Field 4",
        content: "Description (2-line truncation)",
        truncate: true
      }
    ];

    return (
      <IconSettings iconPath="/assets/icons">
        <PageHeader
          details={details}
          icon={
            <Icon
              assistiveText={{ label: "User" }}
              category="standard"
              name="opportunity"
            />
          }
          label="Record Type"
          onRenderActions={actions}
          title="Record Title"
          variant="record-home"
        />
      </IconSettings>
    );
  }
}

export default Example;
