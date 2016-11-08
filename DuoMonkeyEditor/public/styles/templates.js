this["DuoMonkeyEditorDefaultTemplates"] = this["DuoMonkeyEditorDefaultTemplates"] || {};

this["DuoMonkeyEditorDefaultTemplates"]["templates/layout-full.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id=\'firechat\' class=\'full\'>\n<div id=\'firechat-header\' class=\'clearfix\'>\n<div class=\'clearfix\'><div class=\'half firechat-dropdown\' style=\'\'>\n<a id=\'firechat-btn-rooms\' class=\'firechat-dropdown-toggle btn full\' data-toggle="firechat-dropdown" href=\'#\'>\n<span class=\'icon user-chat\'></span>\nChat Rooms\n<span class=\'caret\'></span>\n</a>\n<div class=\'firechat-dropdown-menu full\' role=\'menu\'><ul id=\'firechat-room-list\'></ul><div class=\'firechat-dropdown-footer aligncenter\'>\n<button type=\'button\' class=\'btn twothird center\' id=\'firechat-btn-create-room-prompt\'>Create Room</button>\n</div></div></div>\n<div class=\'half firechat-dropdown\' style=\'\'>\n<a data-event=\'firechat-user-search-btn\' class=\'btn full firechat-dropdown-toggle\' data-toggle="firechat-dropdown" href=\'#\'>\n<span class=\'icon user-group\'></span>\nVisitors\n<span class=\'caret\'></span>\n</a>\n<div class=\'firechat-dropdown-menu\' role=\'menu\'>\n<div class=\'firechat-dropdown-header aligncenter clearfix\'>\n<div class=\'search-wrapper\'>\n<span class=\'icon search\'></span>\n<input type=\'text\' data-event=\'firechat-user-search\' data-template=\'templates/user-search-list-item.html\' data-target=\'firechat-user-search\' data-controls=\'firechat-user-search-controls\' class=\'center fivesixth\'>\n</div>\n</div>\n<ul id=\'firechat-user-search\'></ul><div class=\'firechat-dropdown-footer aligncenter clearfix\'>\n<div id=\'firechat-user-search-controls\' class=\'clearfix\'>\n<span class="quarter"></span>\n<button type=\'button\' class=\'btn half\' data-event=\'firechat-user-search\' data-toggle=\'firechat-pagination-next\' data-template=\'templates/user-search-list-item.html\' data-target=\'firechat-user-search\' data-controls=\'firechat-user-search-controls\' disabled=disabled>Next</button>\n</div><label class=\'center full\'>\n<small>Use "+ Invite" button within chat rooms for regular invites.</small>\n</label>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div id=\'firechat-tabs\' class=\'clearfix\'>\n<ul id=\'firechat-tab-list\' class=\'nav nav-tabs clearfix\'></ul>\n<div id=\'firechat-tab-content\' class=\'tab-content\'></div>\n</div><div id=\'firechat-footer\' class=\'clearfix\'></div>\n</div>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/layout-popout.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id=\'firechat\' class=\'full\'>\n<div id=\'firechat-tabs\' class=\'clearfix\'>\n<ul id=\'firechat-tab-list\' class=\'nav nav-tabs clearfix\'></ul>\n<div id=\'firechat-tab-content\' class=\'tab-content\'></div>\n</div>\n</div>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/message-context-menu.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div data-toggle=\'firechat-contextmenu\' class=\'contextmenu\' data-message-id=\'' +__e( id ) +'\'>\n<ul>\n<li><a href=\'#!\' data-event=\'firechat-user-warn\'>Warn User</a></li>\n'; if (allowKick) { ;__p += '\n<li><a href=\'#!\' data-event=\'firechat-user-kick\'>Kick User</a></li>\n'; } ;__p += '\n<li><a href=\'#!\' data-event=\'firechat-user-suspend-hour\'>Suspend User (1 Hour)</a></li>\n<li><a href=\'#!\' data-event=\'firechat-user-suspend-day\'>Suspend User (1 Day)</a></li>\n<li><a href=\'#!\' data-event=\'firechat-message-delete\'>Delete Message</a></li>\n</ul>\n</div>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/message.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class=\'message message-' +__e( type ) +' '; if (isSelfMessage) { ;__p += ' message-self '; } ;__p += '\' data-message-id=\'' +__e( id ) +'\' data-user-id=\'' +__e( userId ) +'\' data-user-name=\'' +__e( name ) +'\' data-class="firechat-message">\n<div class=\'clearfix\'>\n<label class=\'fourfifth\'>\n<strong class=\'name\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</strong>\n<em>(' +__e( localtime ) +')</em>:\n</label>'; if (!disableActions) { ;__p += '\n<label class=\'fifth alignright\'>\n<a href=\'#!\' data-event=\'firechat-user-chat\' class=\'icon user-chat\' title=\'Invite to Private Chat\'>&nbsp;</a>\n<a href=\'#!\' data-event=\'firechat-user-mute-toggle\' class=\'icon user-mute\' title=\'Mute User\'>&nbsp;</a>\n</label>\n'; } ;__p += '</div>\n<div class=\'clearfix message-content\'>\n' +((__t = ( message )) == null ? '' : __t) +'\n</div>\n</div>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/prompt-alert.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'aligncenter clearfix\'>\n<h6>' +__e( message ) +'</h6>\n<p class=\'clearfix\'>\n<button type=\'button\' class=\'btn quarter right close\'>Close</button>\n</p>\n</div>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/prompt-create-room.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'clearfix\'>\n<h6>Give your chat room a name:</h6>\n<input data-input=\'firechat-room-name\' type=\'text\' placeholder=\'Room name...\' style=\'margin-bottom: 5px;\' maxlength=\'' +__e( maxLengthRoomName ) +'\'>\n</div>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/prompt-invitation.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'aligncenter clearfix\'>\n<h5>' +__e( fromUserName ) +'</h5>\n<p>invited you to join</p>\n<h5>' +__e( toRoomName ) +'</h5>\n<p class=\'clearfix\'>\n<button data-toggle=\'accept\' type=\'button\' class=\'btn\'>Accept</button>\n<button data-toggle=\'decline\' type=\'button\' class=\'btn\'>Decline</button>\n</p>\n</div>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/prompt-invite-private.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'aligncenter clearfix\'>\n<h6>Invite <strong>' +__e( userName ) +'</strong> to ' +__e( roomName ) +'?</h6>\n<p class=\'clearfix\'>\n<button data-toggle=\'accept\' type=\'button\' class=\'btn\'>Invite</button>\n<button data-toggle=\'decline\' type=\'button\' class=\'close btn\'>Cancel</button>\n</p>\n</div>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/prompt-invite-reply.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class=\'aligncenter clearfix\'>\n<h5>' +__e( toUserName ) +'</h5>\n<p>\n'; if (status === 'accepted') { ;__p += ' accepted your invite. '; } else { ;__p += ' declined your invite. '; } ;__p += '\n</p>\n</div>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/prompt-user-mute.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'aligncenter clearfix\'>\n<h5>' +__e( userName ) +'</h5>\n<p class=\'clearfix\'>\n<button data-toggle=\'accept\' type=\'button\' class=\'btn\'>Mute</button>\n<button data-toggle=\'decline\' type=\'button\' class=\'btn\'>Cancel</button>\n</p>\n</div>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/prompt.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class=\'prompt hidden\'>\n<div class=\'prompt-header\'>\n' +__e( title ) +'\n<a href=\'#!\' class=\'close right\'>X</a>\n</div>\n<div class=\'prompt-body clearfix\'>\n' +((__t = ( content )) == null ? '' : __t) +'\n</div>\n<div class=\'prompt-footer\'></div>\n</div>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/room-list-item.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<li data-room-type=\'' +__e( type ) +'\' data-room-id=\'' +__e( id ) +'\' data-room-name=\'' +__e( name ) +'\'>\n<a href=\'#!\' class=\'clearfix '; if (isRoomOpen) { ;__p += ' highlight '; } ;__p += '\'>\n<span class=\'left\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</span>\n</a>\n</li>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/room-user-list-item.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<li data-user-id=\'' +__e( id ) +'\' data-user-name=\'' +__e( name ) +'\'>\n<a href=\'#!\' class=\'clearfix\'>\n<span class=\'left twothird clipped\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</span>'; if (!disableActions) { ;__p += '\n<span data-event=\'firechat-user-mute-toggle\' class=\'icon user-mute right '; if (isMuted) { ;__p += ' red '; } ;__p += '\' title=\'Toggle User Mute\'>&nbsp;</span>\n<span data-event=\'firechat-user-chat\' class=\'icon user-chat right\' title=\'Invite to Private Chat\'>&nbsp;</span>\n'; } ;__p += '\n</a>\n</li>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/room-user-search-list-item.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<li data-user-id=\'' +__e( id ) +'\' data-user-name=\'' +__e( name ) +'\'>\n<a href=\'#!\' class=\'clearfix\'>\n'; if (disableActions) { ;__p += '\n<span class=\'left fourfifth clipped\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</span>\n'; } else { ;__p += '\n<span data-event=\'firechat-user-invite\' class=\'left fourfifth clipped\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</span>\n<span data-event=\'firechat-user-invite\' class=\'icon plus right\' title=\'Invite to Room\'>+</span>\n'; } ;__p += '\n</a>\n</li>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/tab-content.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div id=\'' +__e( id ) +'\' data-room-id=\'' +__e( id ) +'\' class=\'tab-pane\'>\n<div class=\'tab-pane-menu clearfix\'><div class=\'firechat-dropdown twofifth\'>\n<a data-event=\'firechat-user-room-list-btn\' class=\'full btn firechat-dropdown-toggle\' data-toggle="firechat-dropdown" href=\'#\' data-target=\'firechat-room-user-list-' +__e( id ) +'\'>\n<span class=\'icon user-group\'></span>\nIn Room\n<span class=\'caret\'></span>\n</a>\n<div class=\'firechat-dropdown-menu\' role=\'menu\'>\n<ul id=\'firechat-room-user-list-' +__e( id ) +'\' class=\'full\'></ul>\n</div>\n</div><div class=\'firechat-dropdown twofifth\'>\n<a data-event=\'firechat-user-search-btn\' class=\'full btn firechat-dropdown-toggle\' data-toggle="firechat-dropdown" href=\'#\'>\n<span class=\'icon plus\'>+</span>\nInvite\n<span class=\'caret\'></span>\n</a><div class=\'firechat-dropdown-menu\' role=\'menu\'>\n<div class=\'firechat-dropdown-header aligncenter clearfix\'>\n<div class=\'search-wrapper\'>\n<span class=\'icon search\'></span>\n<input type=\'text\' data-event=\'firechat-user-search\' data-template=\'templates/room-user-search-list-item.html\' data-target=\'firechat-room-user-search-' +__e( id ) +'\' data-controls=\'firechat-room-user-search-controls-' +__e( id ) +'\' class=\'center fivesixth\'>\n</div>\n</div>\n<ul id=\'firechat-room-user-search-' +__e( id ) +'\'></ul><div class=\'firechat-dropdown-footer aligncenter clearfix\'>\n<div id=\'firechat-room-user-search-controls-' +__e( id ) +'\' class=\'clearfix\'><span class="quarter"></span>\n<!--\n<button type=\'button\' class=\'btn third disabled\' data-event=\'firechat-user-search\' data-template=\'templates/room-user-search-list-item.html\' data-target=\'firechat-room-user-search-' +__e( id ) +'\' data-controls=\'firechat-room-user-search-controls-' +__e( id ) +'\' data-toggle=\'firechat-pagination-prev\' disabled=disabled>Prev</button>\n-->\n<button type=\'button\' class=\'btn half disabled\' data-event=\'firechat-user-search\' data-template=\'templates/room-user-search-list-item.html\' data-target=\'firechat-room-user-search-' +__e( id ) +'\' data-controls=\'firechat-room-user-search-controls-' +__e( id ) +'\' data-toggle=\'firechat-pagination-next\'  disabled=disabled>Next</button>\n</div>\n</div>\n</div>\n</div><a href=\'#!\' data-event=\'firechat-close-tab\' class=\'icon close right\' style=\'15px 5px\' title=\'Leave Room\'></a></div><div class=\'clearfix\'>\n<div id=\'firechat-messages' +__e( id ) +'\' class=\'chat\'></div>\n</div><div class=\'clearfix\'>\n<label>Your message:</label>\n<textarea id=\'textarea' +__e( id ) +'\' placeholder=\'Type your message here...\'></textarea>\n</div>\n</div>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/tab-menu-item.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<li data-room-id=\'' +__e( id ) +'\'>\n<a href=\'#' +__e( id ) +'\' data-toggle=\'firechat-tab\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</a>\n</li>';}return __p};

this["DuoMonkeyEditorDefaultTemplates"]["templates/user-search-list-item.html"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<li data-user-id=\'' +__e( id ) +'\' data-user-name=\'' +__e( name ) +'\'>\n<a href=\'#!\' class=\'clearfix\'>\n'; if (disableActions) { ;__p += '\n<span class=\'left fivesixth clipped\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</span>\n'; } else { ;__p += '\n<span data-event=\'firechat-user-chat\' class=\'left fivesixth clipped\' title=\'' +__e( name ) +'\'>' +__e( name ) +'</span>\n<span data-event=\'firechat-user-chat\' class=\'icon user-chat right\' title=\'Invite to Private Chat\'>&nbsp;</span>\n'; } ;__p += '\n</a>\n</li>';}return __p};