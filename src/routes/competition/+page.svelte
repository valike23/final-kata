<script lang="ts">
	import TopBar from "$lib/browserComponents/TopBar.svelte";
	import { HttpHelper } from "$lib/browserHelpers/http.helper";
	import type { Icompetition } from "$lib/types/dashboard.types";
	import { onMount } from "svelte";
    const openAddCompetition =()=>{
        console.log('add competition');
    }
    let competitions: Icompetition[] = [];
   
    onMount(async ()=>{
      const {data} = await HttpHelper.Get<Icompetition[]>('api/competition');
        const resp = data;
        console.log("my response is", resp);
        if(resp) competitions = resp
    })

    const activateCompetition =(competition: Icompetition, index: number)=>{

    }
    const deleteCompetition =(competition: Icompetition)=>{

    }


    
</script>

<div class="h-100 container-fluid">
    <TopBar active="competition"/>
    <h1>Manage Competition</h1>
    <div class="container">
      <div class="row cell-12 mb-5 pr-5">
        <button on:click={openAddCompetition} class="button primary float-right"
          >Add Competition</button
        >
      </div>
      <div class="row">
        <div class="cell-12">
          <table class="table  cell-hover">
            <thead>
              <tr style="color: white">
                <th style="color:white">#</th>
                <th style="color:white">competition Name</th>
                <th class="" style="color:white">created Date</th>
                <th style="color:white">Image</th>
                <th style="color:white">Active</th>
                <th style="color:white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {#each competitions as competition, i}
                <tr>
                  <td>{i + 1}</td>
                  <td>{competition.competition_name}</td>
                  <td>{competition.createdAt}</td>
                  <td
                    ><img
                      class="img"
                      src={competition.competition_banner || "images/kata.jpg"}
                      alt=""
                    /></td
                  >
                  <td
                    >{#if competition.active}
                      <span class="mif-done mif-2x fg-green" />
                    {:else}
                      <span class="mif-cross-light mif-2x fg-red " />
                    {/if}</td
                  >
                  <td
                    ><button
                      on:click={() => {
                        activateCompetition(competition, i);
                      }}
                      class="button primary square "
                      title="make this competition active"
                    >
                      <span class="mif-checkmark" />
                    </button>
                    <button
                      on:click={() => {
                        deleteCompetition(competition);
                      }}
                      class="button alert square "
                    >
                      <span class="mif-bin" />
                    </button>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  <style>
    .img {
      height: 40px;
      width: 40px;
    }
  </style>