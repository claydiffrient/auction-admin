import React from "react";
import Button from "@instructure/ui-core/lib/components/Button";
import { Link } from "react-router-dom";
import Grid, {
  GridCol,
  GridRow
} from "@instructure/ui-core/lib/components/Grid";

export default function Home() {
  return (
    <Grid>
      <GridRow>
        <GridCol>
          <Button
            variant="primary"
            margin="x-small"
            as={Link}
            to="/peopleitems"
          >
            Enter People/Items
          </Button>
        </GridCol>
      </GridRow>
      <GridRow>
        <GridCol>
          <Button variant="primary" margin="x-small" as={Link} to="/bids">
            Enter Bids
          </Button>
        </GridCol>
      </GridRow>
      <GridRow>
        <GridCol>
          <Button variant="primary" margin="x-small" as={Link} to="/reports">
            See Totals
          </Button>
        </GridCol>
      </GridRow>
    </Grid>
  );
}

/*
<ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/people">About</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
            </ul>*/
