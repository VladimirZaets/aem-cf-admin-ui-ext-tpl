/*
 * <license header> Slack Modal
 */

import React, {useEffect, useState} from "react";
import {
    Provider,
    defaultTheme,
    Text,
    Content,
    Button,
    ButtonGroup,
} from "@adobe/react-spectrum";
import { connectToParent } from "penpal";

export default <%- functionName %> () {
  const [api, setApi] = useState(undefined);
  const [authConfig, setAuthConfig] = useState(undefined);
  useEffect(() => {
      const { promise } = connectToParent();
      promise.then(
          async (api) => {
              const apiAuthConfig = await api.getAuthConfig();
              setAuthConfig(apiAuthConfig);
              setApi(api);
          }
      );
  }, [api, authConfig]);

  return (
    <Provider theme={defaultTheme} colorScheme={`light`}>
      <Content width="97%">
        <Text>Header button modal content</Text>
        <ButtonGroup align="end" width="100%">
          <Button variant="secondary"
                  onPress={() => api.closeModal()}
                  margin="size-175">
              Cancel
          </Button>
        </ButtonGroup>
      </Content>
    </Provider>
  );
}
