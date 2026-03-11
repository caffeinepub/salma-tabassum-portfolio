import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import OutCall "http-outcalls/outcall";

actor {
  // Data types
  type Message = {
    name : Text;
    email : Text;
    message : Text;
  };

  // Persistent storage for contact messages
  let messages = Map.empty<Principal, Message>();

  // Handle contact form submission
  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    let msg : Message = { name; email; message };
    messages.add(caller, msg);
  };

  // Retrieve all contact form messages (admin endpoint)
  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.values().toArray();
  };

  // Internal helper function to transform GitHub API response
  public query func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };

  // Proxy GitHub API request for repositories
  public shared ({ caller }) func getGitHubRepos() : async Text {
    await OutCall.httpGetRequest(
      "https://api.github.com/users/Mahi-tech-c/repos",
      [],
      transform,
    );
  };

  // Proxy GitHub API request for user profile
  public shared ({ caller }) func getGitHubUser() : async Text {
    await OutCall.httpGetRequest(
      "https://api.github.com/users/Mahi-tech-c",
      [],
      transform,
    );
  };
};
