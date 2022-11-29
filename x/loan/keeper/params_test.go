package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	testkeeper "loan/testutil/keeper"
	"loan/x/loan/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.LoanKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
