import React from "react";
import styles from "./EventList.module.css";
import { Link, useParams  } from "react-router-dom";
import { useCollection } from "react-ketting";
import EventListItem from "./EventListItem";
import jquery = require("jquery");
import base = require ("airtable");
// import { useState, useEffect } from "react";
import { jsonApiStateFactory } from "ketting/dist/state";
import { Resource } from "ketting";


interface IEventProps {
  eventTitle: string;
  eventDescription: string;
  eventStartDate: number;
  eventEndDate: number;
  eventShow?: boolean;
}

const EventList: React.FC<IEventProps> = ({
  eventTitle,
  eventDescription,
  eventStartDate,
  eventEndDate,
  eventShow,
}) => {
  const { loading, error, items } = useCollection<EventListItem>("/event");
  if (loading) return <p>Loading...</p>;
  if (error) return <div className="error">{error.message}</div>;
  console.log(items);

  const $: JQueryStatic = jquery;
  const {id}: { id: any} = useParams(); 
  setTimeout(myGreeting, 1000);
  function myGreeting(){
    $('div[data-event="cube"]').hide();
    $('div[data-event="cube"]').slice(0, 3).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $('div[data-event="cube"]:hidden').slice(0, 5).slideDown();
      if($('div[data-event="cube"]:hidden').length == 0) {
        $("#loadMore").text("No Events").addClass("noContent");
      }
    });
  }

  $(function(){
    $('div[data-event="cube"]').hide();
   $(".event_container").slice(0, 3).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".event_container:hidden").slice(0, 5).slideDown();
      if($(".event_container:hidden").length == 0) {
        $("#loadMore").text("No Events").addClass("noContent");
      }
    });
  });

  const eventListItems = items.map((item, i)=>
  <EventListItem key={i} resource={item} />
  );
  
  return (
    // add event Id to enable load more feature
    <div>
      <div className={styles["header"]}>UPCOMING EVENTS</div>
      <div className={styles["event_container_1"]}>
        {/* {items.map((item, i) => (
          <EventListItem key={i} resource={item} />
        ))} */}
        {eventListItems}
      </div>
       <a href="#" id="loadMore">Load More</a>
    </div>
  );

};

export default EventList;
